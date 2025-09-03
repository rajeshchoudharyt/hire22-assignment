"use client";

import { useState } from "react";

const faq = [
	{
		question: "What is CoNCT work?",
		answer: "Job CoNCT lets employers instantly connect with candidates from our database, bypassing the traditional hiring process for faster results.",
	},
	{
		question: "How does Job CoNCT work?",
		answer: "Once you send a Job CoNCT request, the candidate will receive an invitation. Upon the candidate's confirmation, you will gain access to their contact details,are unlocked for you, enabling you to move forward with the interview process.",
	},
	{
		question: "Why Job CoNCT?",
		answer: "Job CoNCT connects you with active candidates who meet your job requirements, giving you interview-ready options without the hassle of sifting through resumes.",
	},
	{
		question: "What is SARA AI?",
		answer: "SARA AI is our intelligent recruiter bot that provides personalised recommendations by ranking candidate profiles and resumes based on job descriptions and skill sets.",
	},
	{
		question: "What is Super Profile?",
		answer: "Super Profile refers to candidates who meet all job description requirements, show genuine interest in your position, and are ready for interviews. This helps you quickly identify the ideal match for your job.",
	},
	{
		question: "How does the JoinX score work?",
		answer: "JoinX Score (Joining Factor Score) is an advanced metric that evaluates candidates beyond traditional resume matching. Powered by our AI agent, SARA, the JoinX Score takes into account critical factors like CTC, location, notice period, and more. This scoring system helps rank candidates, ensuring you find the best fit for your hiring needs",
	},
	{
		question: "How many credits do I get when I register?",
		answer: "Upon registration, you will receive 5000 free trial credits, sufficient to fulfill two job requirements.",
	},
	{
		question: "Can I create a job CoNCT without using credits?",
		answer: "Yes, you can create Job CoNCTs for free, but you’ll need credits to connect with candidates.",
	},
	{
		question: "How can I monitor credit usage?",
		answer: "You can track your credit usage and remaining balance through the recruiter dashboard.",
	},
	{
		question: "What should I do once my trial credits run out?",
		answer: "You can conveniently top up your credits via the platform or refer to our pricing plan for more details.",
	},
	{
		question: "Are there any hidden cost with Hire22.ai?",
		answer: "No, all costs are transparent, and you can manage your credits easily. There are no hidden fees for posting jobs or using Job CoNCT.",
	},
];

export default function FAQContainer() {
	const [faqKey, setFaqKey] = useState(false);

	return (
		<section aria-label="employer FAQ" className="p-4">
			<h2 className="text-2xl text-center lg:text-4xl font-semibold text-gray-800 mt-4 mb-8">
				Employer FAQ
			</h2>
			<div className="space-y-2">
				{faq.map((item, key) => (
					<div
						key={key}
						className="collapse collapse-arrow bg-base-100 border border-base-300">
						<input
							type="radio"
							name="faq"
							onClick={() =>
								setFaqKey((prev) =>
									prev === key ? false : key
								)
							}
							checked={key === faqKey}
							onChange={() => null}
							className="cursor-pointer"
						/>
						<div className="collapse-title font-semibold after:right-6">
							{item.question}
						</div>
						<div className="collapse-content text-sm">
							{item.answer}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
