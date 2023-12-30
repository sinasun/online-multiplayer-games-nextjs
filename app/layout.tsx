import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthProvider from '@/context/auth-provider';
import { getServerSession } from 'next-auth/next';
import { Navbar } from '@/components';
import NextProvider from '@/context/nextui-provider';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
};

export default async function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession();

	return (
		<html lang="en" className="light">
			<body className={`${inter.className} flex flex-col`}>
				<NextProvider>
					<AuthProvider session={session}>
						<Navbar />
						<main className="w-2/3 mx-auto">{children}</main>
					</AuthProvider>
				</NextProvider>
			</body>
		</html>
	);
}
