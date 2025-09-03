import Image from "next/image";
import FAQContainer from "./FAQContainer";

export default function Container() {
	return (
		<div className="flex flex-col gap-y-14">
			{/* Section - "Register" */}
			<section
				aria-label="register"
				className="flex flex-col text-center text-gray-800 items-center p-6 gap-y-8 lg:gap-y-12">
				<h3 className="font-sans tracking-wide text-xl sm:text-3xl leading-14 lg:leading-20">
					India's First <br />
					<p className="font-bold text-3xl lg:text-5xl leading-10 lg:leading-16">
						AI-Powered Instant
						<span className="text-p-pink"> JobCoNCT</span>
					</p>
					<p className="leading-8 mt-4">
						Platform for Mid and Senior-Level Hiring
					</p>
				</h3>
				<p className="text-base max-w-xl text-gray-700">
					Get confirmed interview-ready candidates in just{" "}
					<span className="text-p-pink font-semibold">22 hours.</span>{" "}
					Create a JobCoNCT and get access to AI-Scored candidates!
				</p>
				<a className="btn btn-primary btn-lg w-fit border-0 font-medium">
					Register and CoNCT
				</a>
			</section>

			{/* Section - "How does it work" */}
			<section aria-label="how-does-it-work" className="text-center p-4">
				<h2 className="text-2xl lg:text-4xl font-semibold text-gray-800 mt-4 mb-8">
					How does it work?
				</h2>

				{/* To align odd number of child - "last:after:w-sm last:after:mx-4" */}
				<div className="flex flex-wrap justify-center gap-4">
					<div className="flex flex-col justify-center items-center bg-base-200/20 rounded-2xl px-4 py-6 w-fit">
						<h3 className="text-xl font-semibold">
							Create a JobCoNCT
						</h3>
						<Image
							width={200}
							height={200}
							alt="Create a JobCoNCT image"
							priority={true}
							className="mb-4 lg:mb-6"
							src="/create-a-jobconct.webp"
						/>
						<p className="max-w-sm tracking-wide">
							Post your job in a few simple steps and let our AI
							agent (SARA) deliver interview ready candidates
							within 22 hours.
						</p>
					</div>
					<div className="flex flex-col justify-center items-center bg-base-200/20 rounded-2xl px-4 py-6 w-fit">
						<h3 className="text-xl font-semibold">
							JoinX Score Profiles
						</h3>
						<Image
							width={200}
							height={200}
							alt="JoinX score profiles image"
							priority={true}
							className="mb-4 lg:mb-6"
							src="/joinx-score-profiles.webp"
						/>
						<p className="max-w-sm tracking-wide">
							JoinX Score isn't just about matching resumes. Our
							AI agent (SARA) intelligently analyses candidate
							CTC, location and notice period to rank profiles
							that best fit your hiring criteria.
						</p>
					</div>
					<div className="flex flex-col justify-center items-center bg-base-200/20 rounded-2xl px-4 py-6 w-fit">
						<h3 className="text-xl font-semibold">
							Get Super Profiles
						</h3>
						<Image
							width={200}
							height={200}
							alt="Get super profiles image"
							priority={true}
							className="mb-4 lg:mb-6"
							src="/get-super-profiles.webp"
						/>
						<p className="max-w-sm tracking-wide">
							Review Super Profiles using the JoinX Score and move
							forward with interviews to secure the perfect match
							for your job.
						</p>
					</div>
				</div>
			</section>

			{/* Section - "Why Hire22.ai?" */}
			<section aria-label="Why-hire22.ai" className="text-center p-4">
				<h2 className="text-2xl lg:text-4xl font-semibold text-gray-800 mt-4 mb-8">
					Why Hire22.ai ?
				</h2>

				<div className="flex flex-wrap justify-center gap-4">
					<div
						className="flex flex-col justify-center items-center border-2 border-base-200 shadow-md 
									rounded-2xl px-4 py-6 w-fit">
						<Image
							width={250}
							height={250}
							alt="Interview ready talent image"
							priority={true}
							className="mb-4 lg:mb-6"
							src="/interview-ready-talent.webp"
						/>
						<h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-p-blue to-p-pink bg-clip-text text-transparent">
							Interview Ready Talent
						</h3>
						<p className="max-w-sm tracking-wide">
							Connect with interview-ready candidates, ensuring
							you engage with professionals who are ready and
							available for interviews.
						</p>
					</div>
					<div
						className="flex flex-col justify-center items-center border-2 border-base-200 shadow-md 
										rounded-2xl px-4 py-6 w-fit">
						<Image
							width={250}
							height={250}
							alt="AI ranked candidates image"
							priority={true}
							className="mb-4 lg:mb-6"
							src="/ai-ranked-candidates.webp"
						/>
						<h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-p-blue to-p-pink bg-clip-text text-transparent">
							AI Ranked Candidates
						</h3>
						<p className="max-w-sm tracking-wide">
							SARA AI ranks candidates based on JoinX Score by job
							description, analyzing skills and role alignment,
							ensuring that the top AI-scored talent stands out in
							our database.
						</p>
					</div>
					<div
						className="flex flex-col justify-center items-center border-2 border-base-200 shadow-md 
						rounded-2xl px-4 py-6 w-fit">
						<Image
							width={250}
							height={250}
							alt="Hire in 22 hours image"
							priority={true}
							className="mb-4 lg:mb-6"
							src="/hire-in-22-hours.webp"
						/>
						<h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-p-blue to-p-pink bg-clip-text text-transparent">
							Hire in 22 Hours
						</h3>
						<p className="max-w-sm tracking-wide">
							Get the perfect match for your Mid & Senior roles in
							just 22 hours. Fast, efficient and hassle-free
							hiring starts here.
						</p>
					</div>
				</div>
			</section>

			{/* Section - "Talk to our CEO" */}
			<section aria-label="talk to our CEO" className="text-center p-4">
				<h2 className="text-2xl lg:text-4xl font-semibold text-gray-800 mt-4 mb-8">
					Talk to our CEO
				</h2>

				<div
					className="flex flex-col justify-center items-center text-left border-2 border-base-200 shadow-md 
									rounded-2xl p-4 md-p-6 gap-y-4 max-w-lg mx-auto">
					<Image
						alt="Joby Joseph, Founder and CEO - image"
						width={150}
						height={150}
						className="mask mask-circle"
						src="/joby-joseph.webp"
					/>
					<div className="flex justify-between items-center w-full">
						<p className="text-left font-semibold">
							Joby Joseph <br />
							<span className="font-light">
								Founder and CEO, Hire22.ai
							</span>
						</p>
						<a className="btn btn-success w-fit">
							WhatsApp
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-5 h-5 fill-success-content"
								viewBox="0 0 448 512">
								<path d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z" />
							</svg>
						</a>
					</div>
					<p className="max-w-lg tracking-wide">
						Need help finding top Talent with Hire22.ai? Want to
						discuss the future of Leadership Hiring? <br /> <br />{" "}
						I'm Joby, a Startup Enthusiast with 15 years in HR Tech.
						I founded Freshersworld.com, a niche job portal that
						served 30,000+ companies, with 15 million user signups
						and an app with 1.5 million downloads. Now, I'm excited
						to introduce Hire22.ai, a game-changer in top-level
						recruitment. <br /> <br /> Let's discuss your hiring
						challenges! I'm confident Hire22.ai can be a valuable
						tool in finding the perfect fit for your team.
					</p>
				</div>
			</section>

			{/* Section - "Employer FAQ" */}
			<FAQContainer />

			{/* Section - Footer */}
			<section aria-label="footer"></section>
		</div>
	);
}
