<script lang="ts">
	// Modules
	import { showContentEditor } from '$lib/stores/ui.store';

	// Components
	import ChevronLeft from '../icons/ChevronLeft.svelte';
	import ChevronRight from '../icons/ChevronRight.svelte';
	import NodeIconEditor from './nodes/NodeIconEditor.svelte';
	import NodeListEditor from './nodes/NodeListEditor.svelte';
	import NodeTextEditor from './nodes/NodeTextEditor.svelte';
	import NodeTitleEditor from './nodes/NodeTitleEditor.svelte';
	import EdgeEditor from './edges/EdgeEditor.svelte';

	export let selectedNode: any;
	export let selectedEdge: any;

	const toggleModal = () => {
		showContentEditor.update((n) => !n);
	};
</script>

<div
	class="fixed top-0 right-0 flex h-full pointer-events-none"
	style="max-width:{showContentEditor ? '400px' : '0px'};"
>
	<div
		class="relative flex flex-col w-full pointer-events-auto bg-base-200"
		style="top: 100px; min-height: 400px;"
	>
		<button
			class="absolute z-10 p-2 translate-y-0 bg-accent text-neutral rounded-l-md focus:outline-none -left-10"
			on:click={toggleModal}
			style="transform: translateY(100px);"
		>
			{#if $showContentEditor}
				<ChevronRight></ChevronRight>
			{:else}
				<ChevronLeft></ChevronLeft>
			{/if}
		</button>

		{#if $showContentEditor}
			<div class="w-full p-4 pr-10">
				{#if $selectedNode?.type === 'nodeText'}
					<NodeTextEditor on:updateNodes></NodeTextEditor>
				{/if}
				{#if $selectedNode && $selectedNode.type == 'nodeIcon'}
					<NodeIconEditor on:updateNodes></NodeIconEditor>
				{/if}
				{#if $selectedNode && $selectedNode.type == 'nodeList'}
					<NodeListEditor on:updateNodes></NodeListEditor>
				{/if}
				{#if $selectedNode && $selectedNode.type == 'nodeTitle'}
					<NodeTitleEditor on:updateNodes></NodeTitleEditor>
				{/if}
				{#if $selectedEdge}
					<EdgeEditor on:updateEdges></EdgeEditor>
				{/if}
			</div>
		{/if}
	</div>
</div>
