import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import { H4, Trunc } from "../el/appnotetypography"
import { BriefcaseIcon } from "@heroicons/react/outline"
const JobInfoBlock = props => {
  const description = Trunc(props.description, 350)
  const jobDetails = props.jobData.nodes.find(job => job.jobId === props.id)
  console.log(props.jobData.nodes)
  console.groupCollapsed(jobDetails)
  return (
    <div tw="bg-white rounded-sm shadow-md">
      <div tw="shadow-sm h-full rounded-sm pb-6 overflow-hidden">
        <span tw="block w-full bg-blue-600 h-3"></span>
        <div tw="py-2 px-4">
          <H4 tw="mb-0">Position Title</H4>
          <h3
            dangerouslySetInnerHTML={{ __html: props.job }}
            tw="font-normal text-sm text-gray-600 pb-3"
          ></h3>
          <H4>Description</H4>
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            tw="text-xs text-gray-500 mb-4"
          ></p>
          <p tw="text-xs text-gray-500 mb-2">
            <b tw="mr-2 text-gray-700">Location:</b>
            {jobDetails.location}
          </p>
          <p tw="text-xs text-gray-500 mb-8">
            <b tw="mr-2 text-gray-700">Type:</b>
            {jobDetails.type}
          </p>
          <Link
            className="group flex items-center px-1.5 py-1.5 rounded bg-blue-200 hover:bg-blue-100 transition"
            to="/form/apply"
            state={{ jobId: props.link, job: props.job }}
          >
            <BriefcaseIcon tw="w-auto h-6 mr-1 text-blue-700 group-hover:text-blue-600 transition" />
            <span tw="text-xs text-blue-600 font-semibold group-hover:text-blue-500 transition">
              Apply Now!
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default JobInfoBlock
