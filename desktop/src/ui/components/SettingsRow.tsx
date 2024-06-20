import type { JSX, ParentProps } from 'solid-js';

type SettingsRowProps = ParentProps & {
	title: JSX.Element;
	description: JSX.Element;
	icon: JSX.Element;
	onClick?: () => any;
};

function SettingsRow(props: SettingsRowProps) {
	return (
		<div
			class={`flex flex-row bg-component-bg rounded-xl gap-3.5 p-4 ${props.onClick ? 'hover:bg-component-bg-hover active:bg-component-bg-pressed' : ''} items-center`}
			{...(props.onClick ? { onClick: props.onClick } : {})}
		>
			<div class="flex justify-center items-center h-8 w-8">
				{props.icon}
			</div>

			<div class="flex flex-col gap-2 flex-1">
				<h3 class="text-lg">{props.title}</h3>
				<p class="text-wrap text-sm">{props.description}</p>
			</div>

			<div>
				{props.children}
			</div>
		</div>
	);
}

SettingsRow.Header = (props: JSX.HTMLAttributes<HTMLHeadingElement>) => {
	return <h3 class={`mt-4 mb-1 ml-2 text-md text-fg-secondary uppercase ${props.class || ''}`} {...props} />;
};

export default SettingsRow;
