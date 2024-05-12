import { useSearchParams } from '@solidjs/router';
import type { ParentProps } from 'solid-js';
import { EyeIcon, File06Icon, Globe04Icon, Image03Icon, PackagePlusIcon, Settings04Icon, Tool02Icon, User01Icon } from '@untitled-theme/icons-solid';
import Sidebar from '../../components/Sidebar';
import AnimatedRoutes from '../../components/AnimatedRoutes';
import ErrorBoundary from '../../components/ErrorBoundary';

function ClusterRoot(props: ParentProps) {
	const [searchParams] = useSearchParams();

	return (
		<div class="flex flex-row flex-1 h-full gap-x-7">
			<div class="mt-8">
				<Sidebar
					base="/clusters"
					state={{ id: searchParams.id }}
					links={{
						Cluster: [
							[<EyeIcon />, 'Overview', '/'],
							// [<User01Icon />, 'Accounts', '/users'],
							[<PackagePlusIcon />, 'Mods', '/mods'],
							[<Image03Icon />, 'Screenshots', '/screenshots'],
							[<Globe04Icon />, 'Worlds', '/worlds'],
							[<File06Icon />, 'Logs', '/logs'],
						],
						Settings: [
							[<Tool02Icon />, 'Java', '/java'],
							[<Settings04Icon />, 'Miscellaneous', '/misc'],
						],
					}}
				/>
			</div>

			<div class="flex flex-col w-full h-full">
				<AnimatedRoutes>
					<ErrorBoundary>
						{props.children}
					</ErrorBoundary>
				</AnimatedRoutes>
			</div>
		</div>
	);
}

export default ClusterRoot;
