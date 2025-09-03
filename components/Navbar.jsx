import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="navbar sticky top-0 bg-base-100 shadow-md z-50">
			<div className="navbar-start">
				<a
					className="btn btn-ghost bg-transparent border-0 hover:translate-y-[1px]"
					href="/">
					<Image
						alt="Logo"
						height={20}
						width={120}
						src="logo/hire22-logo.svg"
						className="object-contain w-auto h-6"
					/>
				</a>
			</div>

			{/* Navbar menu items */}
			<div className="navbar-end">
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-square bg-transparent border-0 hover:scale-105">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="inline-block h-6 w-6 stroke-current">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
						<li>
							<a href="https://www.hire22.ai/recruit/login?utm_source=wb_hirenow_topmenu">
								Login
							</a>
						</li>
						<li>
							<a href="https://www.hire22.ai/recruit/register?utm_source=wb_hirenow_topmenu">
								Register
							</a>
						</li>
						<li>
							<a href="https://www.hire22.ai/recruit/create-jobconct?utm_source=wb_hirenow_topmenu">
								Post a JobCoNCT
							</a>
						</li>
						<li>
							<a href="https://www.hire22.ai/recruit/pricing?utm_source=wb_hirenow_topmenu">
								Pricing
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
