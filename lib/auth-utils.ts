import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { auth } from './auth'

const authSession = async () => {
	const session = auth.api.getSession({ headers: await headers() })

	return session
}

export const requireAuth = async () => {
	const session = await authSession()

	if (!session) {
		redirect('/sign-in')
	}

	return session
}

export const requireNoAuth = async () => {
	const session = await authSession()

	if (session) {
		redirect('/')
	}
}
