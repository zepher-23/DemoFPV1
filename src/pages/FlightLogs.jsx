import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useReactTable, getCoreRowModel, getSortedRowModel, getFilteredRowModel, flexRender, createColumnHelper } from '@tanstack/react-table';
import { ArrowUpDown, Search, Download } from 'lucide-react';

const defaultData = [
    { id: 1, date: '2024-03-10', location: 'Mojave Desert', client: 'Red Bull', drone: '5" Freestyle', duration: '4h 30m', status: 'Completed' },
    { id: 2, date: '2024-03-15', location: 'Downtown LA', client: 'Porsche', drone: 'Cinewhoop', duration: '2h 00m', status: 'Completed' },
    { id: 3, date: '2024-03-22', location: 'Swiss Alps', client: 'North Face', drone: '7" Long Range', duration: '6h 15m', status: 'Pending Edit' },
    { id: 4, date: '2024-04-01', location: 'Miami Beach', client: 'Music Video', drone: '5" Freestyle', duration: '3h 45m', status: 'Completed' },
    { id: 5, date: '2024-04-05', location: 'Factory Tour', client: 'Tesla', drone: 'Cinewhoop', duration: '1h 30m', status: 'Completed' },
    { id: 6, date: '2024-04-12', location: 'Drift track', client: 'Formula Drift', drone: '5" Freestyle', duration: '8h 00m', status: 'In Progress' },
    { id: 7, date: '2024-04-18', location: 'National Park', client: 'Nat Geo', drone: 'Mavic 3 Cine', duration: '5h 20m', status: 'Completed' },
];

const columnHelper = createColumnHelper();

const FlightLogs = () => {
    const [sorting, setSorting] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');

    const columns = useMemo(() => [
        columnHelper.accessor('date', {
            header: ({ column }) => (
                <button className="flex items-center gap-2 hover:text-cyan-400 text-xs uppercase tracking-wider font-bold" onClick={column.getToggleSortingHandler()}>
                    Date <ArrowUpDown size={14} />
                </button>
            ),
            cell: info => <span className="font-mono text-gray-300">{info.getValue()}</span>
        }),
        columnHelper.accessor('client', {
            header: 'Client',
            cell: info => <span className="font-bold text-white">{info.getValue()}</span>
        }),
        columnHelper.accessor('location', {
            header: 'Location',
            cell: info => info.getValue()
        }),
        columnHelper.accessor('drone', {
            header: 'Drone',
            cell: info => <span className="text-cyan-400 text-xs px-2 py-1 bg-cyan-900/20 rounded border border-cyan-900/50">{info.getValue()}</span>
        }),
        columnHelper.accessor('status', {
            header: 'Status',
            cell: info => {
                const status = info.getValue();
                let color = "text-gray-400";
                if (status === 'Completed') color = "text-green-400";
                if (status === 'In Progress') color = "text-yellow-400";
                return <span className={`text-xs font-bold uppercase ${color}`}>{status}</span>
            }
        }),
    ], []);

    const table = useReactTable({
        data: defaultData,
        columns,
        state: {
            sorting,
            globalFilter,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    return (
        <div className="pt-24 min-h-screen bg-black text-white">
            <div className="container mx-auto px-6 py-12">
                <Link to="/portfolio" className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors uppercase font-bold text-xs tracking-widest mb-6">
                    ← Back to Portfolio
                </Link>
                <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-2 uppercase">Flight Logs</h1>
                        <p className="text-gray-400 text-sm">Comprehensive archive of past missions and clients.</p>
                    </div>
                </div>

                <div className="bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden p-6">
                    {/* Toolbar */}
                    <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                            <input
                                value={globalFilter ?? ''}
                                onChange={e => setGlobalFilter(e.target.value)}
                                placeholder="Search logs..."
                                className="pl-10 pr-4 py-2 bg-black border border-white/10 rounded-lg text-white text-sm focus:border-cyan-400 focus:outline-none w-full md:w-64"
                            />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-bold text-gray-300 transition-colors">
                            <Download size={16} /> Export CSV
                        </button>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-black/50 border-b border-white/10 text-gray-400">
                                {table.getHeaderGroups().map(headerGroup => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map(header => (
                                            <th key={header.id} className="px-3 py-3 md:px-6 md:py-4 text-xs font-bold uppercase tracking-wider">
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {table.getRowModel().rows.map(row => (
                                    <tr key={row.id} className="hover:bg-white/5 transition-colors">
                                        {row.getVisibleCells().map(cell => (
                                            <td key={cell.id} className="px-3 py-3 md:px-6 md:py-4 text-sm whitespace-nowrap">
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 text-xs text-gray-500 text-center">
                        Showing {table.getRowModel().rows.length} records
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightLogs;
