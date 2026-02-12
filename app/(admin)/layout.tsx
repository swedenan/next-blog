import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<div className="p-6 w-full">{children}</div>
		</SidebarProvider>
	)
}
