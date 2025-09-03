"use client";

import Image from "next/image";
import { useState } from "react";

export default function AboutUs() {
	const [data, setData] = useState({
		companyName: "",
		name: "",
		email: "",
		mobileNo: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value });
	};

	const handleBlur = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value.trim() });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("https://dummyapi.com/register", {
				method: "POST",
				body: data,
			});
			const result = await response.json();

			console.log("Success");
		} catch (error) {
			alert("Error: Request Failure - dummpapi");
		}

		console.log(data);
	};

	return (
		<section aria-label="About us" className="p-8 bg-base-200 -mb-14">
			<h2 className="text-2xl lg:text-4xl font-semibold text-gray-800 mt-4 mb-8">
				About Hire22
			</h2>
			<p className="max-w-xl">
				India's first anonymous job connect platform for mid and senior
				professionals. Discover secure, confidential, and fast
				connections with top employers without sharing your contact
				details until you accept JobCoNCT.
			</p>

			<footer
				className="footer gap-y-8 flex flex-wrap
                                bg-base-200 mt-8 text-primary gap-x-14">
				<nav>
					<h6 className="footer-title text-gray-800">HR Tools</h6>
					<div className="grid grid-cols-2 gap-x-10 gap-y-2">
						<a className="link link-hover">HR Checklists</a>
						<a className="link link-hover">HR Policies</a>
						<a className="link link-hover">HR Calculators</a>
						<a className="link link-hover">Job Descriptions</a>
						<a className="link link-hover">HR Frameworks</a>
						<a className="link link-hover">HR Email Playbook</a>
						<a className="link link-hover">Performance Review</a>
						<a className="link link-hover">Interview Questions</a>
					</div>
				</nav>
				<nav>
					<h6 className="footer-title text-gray-800">Information</h6>
					<a className="link link-hover">About us</a>
					<a className="link link-hover">Blog</a>
					<a className="link link-hover">Sitemap</a>
					<a className="link link-hover">Anonymous Policy</a>
				</nav>
				<nav>
					<h6 className="footer-title text-gray-800">
						Candidate Zone
					</h6>
					<a className="link link-hover">How it works</a>
					<div className="flex gap-x-4">
						<a className="link link-hover">
							<Image
								alt="google play icon"
								src="icon/google-play-icon.svg"
								width={20}
								height={20}
							/>
						</a>
						<a className="link link-hover">
							<Image
								alt="apple icon"
								src="icon/apple-icon.svg"
								width={20}
								height={20}
							/>
						</a>
					</div>
				</nav>
				<nav>
					<h6 className="footer-title text-gray-800">
						Employer Zone
					</h6>
					<a className="link link-hover">Register to Hire</a>
					<a className="link link-hover">How it works for Employer</a>
					<a className="link link-hover">SARA AI Recruiter</a>
				</nav>

				{/* Register form or contact us form */}
				<form className="text-gray-800 w-full" onSubmit={handleSubmit}>
					<h6 className="footer-title text-gray-800">Need Help?</h6>

					<a href="" className="text-primary">
						support@hire22.ai
					</a>
					<a href="" className="text-primary mb-4">
						+91 88845 33345
					</a>

					<label htmlFor="companyName">Company Name</label>
					<input
						type="text"
						name="companyName"
						id="companyName"
						maxLength={50}
						value={data.companyName}
						onChange={handleChange}
						onBlur={handleBlur}
						placeholder="Company Name"
						className="input input-secondary focus:outline-offset-0 w-80 mb-2 -mt-1"
					/>
					<label htmlFor="name">Company Person Name</label>
					<input
						type="text"
						name="name"
						id="name"
						maxLength={50}
						value={data.name}
						onChange={handleChange}
						onBlur={handleBlur}
						placeholder="Company Person Name"
						className="input input-secondary focus:outline-offset-0 w-80 mb-2 -mt-1"
					/>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						value={data.email}
						onChange={handleChange}
						onBlur={handleBlur}
						placeholder="Email"
						className="input input-secondary focus:outline-offset-0 w-80 mb-2 -mt-1"
					/>
					<label htmlFor="mobileNo">Mobile Number</label>
					<input
						type="text"
						name="mobileNo"
						id="mobileNo"
						placeholder="Mobile Number"
						pattern="[0-9]{10}"
						title="Mobile Number must be 10 digits only"
						value={data.mobileNo}
						onChange={handleChange}
						onBlur={handleBlur}
						className="input input-secondary focus:outline-offset-0 w-60 mb-2 -mt-1"
					/>
					<input
						type="submit"
						value="Contact us"
						className="btn btn-primary my-4"
					/>
				</form>
			</footer>
		</section>
	);
}
