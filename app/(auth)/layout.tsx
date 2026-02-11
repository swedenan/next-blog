export default function AuthLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="flex h-dvh justify-center items-center">{children}</div>
	)
}
