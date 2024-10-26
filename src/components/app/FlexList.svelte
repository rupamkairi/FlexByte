<script>
	import { createSvelteTable, flexRender, getCoreRowModel } from '@tanstack/svelte-table';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import { EditOutline } from 'flowbite-svelte-icons';

	export let flexes;

	const table = createSvelteTable({
		getCoreRowModel: getCoreRowModel(),
		data: $flexes,
		columns: [
			{
				accessorKey: 'name',
				cell: (info) => info.getValue()
			}
		]
	});
</script>

<br />
<Table noborder shadow hoverable>
	<TableHead>
		{#each $table.getHeaderGroups() as headerGroup}
			{#each headerGroup.headers as header}
				<TableHeadCell>
					{#if !header.isPlaceholder}
						<svelte:component
							this={flexRender(header.column.columnDef.header, header.getContext())}
						/>
					{/if}
				</TableHeadCell>
			{/each}
		{/each}
		<TableHeadCell />
	</TableHead>
	<TableBody>
		{#each $table.getRowModel().rows as row}
			<TableBodyRow>
				{#each row.getVisibleCells() as cell}
					<TableBodyCell>
						<svelte:component this={flexRender(cell.column.columnDef.cell, cell.getContext())} />
					</TableBodyCell>
				{/each}
				<TableBodyCell tdClass="px-6 py-4 w-min flex flex-shrink gap-2 items-center">
					<a href={`/app/flexes/${row.original?.id}`}>
						<EditOutline />
					</a>
				</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
