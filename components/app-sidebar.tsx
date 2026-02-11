import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem
} from '@/components/ui/sidebar'
import { Calendar, Home, Inbox, Search } from 'lucide-react'
import Link from 'next/link'

const items = [
	{
		title: 'Dashboard',
		url: '/dashboard',
		icon: Home
	},
	{
		title: 'Posts',
		url: '/posts',
		icon: Inbox
	},
	{
		title: 'Categories',
		url: '/categories',
		icon: Calendar
	},
	{
		title: 'Saved Posts',
		url: '/saved-posts',
		icon: Search
	}
]

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup />
				<SidebarGroupLabel>NextBlog</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						{items.map(item => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton asChild>
									<Link href={item.url}>
										<item.icon />
										<span>{item.title}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroupContent>
				<SidebarGroup />
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	)
}
