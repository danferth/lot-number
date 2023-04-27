import React from "react"
import tw, { css } from "twin.macro"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { H4, P } from "../el/typography"
import MailIcon from "../../images/svg/icons/mail.svg"
import MarkIcon from "../../images/svg/icons/mark.svg"

const MeetOurTeam = () => {
  const data = useStaticQuery(graphql`
    {
      mark: file(relativePath: { eq: "page/marketing/linkedin-mark.jpg" }) {
        name
        childImageSharp {
          gatsbyImageData(width: 800, placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
      matt: file(relativePath: { eq: "page/marketing/linkedin-matt.jpg" }) {
        name
        childImageSharp {
          gatsbyImageData(width: 800, placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
      jessica: file(
        relativePath: { eq: "page/marketing/linkedin-jessica.jpg" }
      ) {
        name
        childImageSharp {
          gatsbyImageData(width: 800, placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
      christian: file(
        relativePath: { eq: "page/marketing/linkedin-christian.jpg" }
      ) {
        name
        childImageSharp {
          gatsbyImageData(width: 800, placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
      sam: file(relativePath: { eq: "page/marketing/linkedin-sam.jpg" }) {
        name
        childImageSharp {
          gatsbyImageData(width: 800, placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
      melissa: file(
        relativePath: { eq: "page/marketing/linkedin-melissa.jpg" }
      ) {
        name
        childImageSharp {
          gatsbyImageData(width: 800, placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
      maritza: file(
        relativePath: { eq: "page/marketing/linkedin-maritza.jpg" }
      ) {
        name
        childImageSharp {
          gatsbyImageData(width: 800, placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
      dennis: file(relativePath: { eq: "page/marketing/linkedin-dennis.jpg" }) {
        name
        childImageSharp {
          gatsbyImageData(width: 800, placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  `)

  const Melissa = {
    name: "Melissa Ellis",
    role: "President",
    imageUrl: data.melissa.childImageSharp.gatsbyImageData,
    linkedinUrl: "https://www.linkedin.com/in/melissa-ellis-92121211b/",
  }
  const Sam = {
    name: "Sam Ellis",
    role: "Vice President",
    imageUrl: data.sam.childImageSharp.gatsbyImageData,
    linkedinUrl: "https://www.linkedin.com/in/sam-ellis-14b14b9/",
  }
  const Dennis = {
    name: "Dennis McDonald",
    role: "Head of Operations",
    imageUrl: data.dennis.childImageSharp.gatsbyImageData,
    linkedinUrl: "https://www.linkedin.com/in/dennis-mcdonald-b5bb441/",
  }
  const Maritza = {
    name: "Maritza Mygrants, CMT SPHR",
    role: "Head of Human Resources",
    imageUrl: data.maritza.childImageSharp.gatsbyImageData,
    linkedinUrl: false,
  }
  const Mark = {
    name: "Mark Rehse, MSC.",
    role: "National Sales Manager",
    imageUrl: data.mark.childImageSharp.gatsbyImageData,
    linkedinUrl: "https://www.linkedin.com/in/mark-rehse-2390a74/",
  }
  // {
  //   name: "Matt Obusek",
  //   role: "Technical Sales Manager",
  //   imageUrl: data.matt.childImageSharp.gatsbyImageData,
  //   linkedinUrl: "https://www.linkedin.com/in/matt-obusek-a892a15/",
  // },
  // {
  //   name: "Jessica Oates, PH.D",
  //   role: "Technical Sales Manager",
  //   imageUrl: data.jessica.childImageSharp.gatsbyImageData,
  //   linkedinUrl: "https://www.linkedin.com/in/jessica-oates-52218b103/",
  // },
  // {
  //   name: "Christian Lux",
  //   role: "Technical Sales Manager",
  //   imageUrl: data.christian.childImageSharp.gatsbyImageData,
  //   linkedinUrl: "https://www.linkedin.com/in/christian-lux-015643199/",
  // },

  return (
    <div className="bg-white">
      <div className="space-y-8 text-center">
        <ul
          role="list"
          className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-1 sm:space-y-0 lg:w-3/4 lg:grid-cols-2 lg:max-w-5xl"
        >
          <PersonSquare
            key={Melissa.name}
            name={Melissa.name}
            role={Melissa.role}
            imageUrl={Melissa.imageUrl}
            linkedinUrl={Melissa.linkedinUrl}
          />
          <PersonSquare
            key={Sam.name}
            name={Sam.name}
            role={Sam.role}
            imageUrl={Sam.imageUrl}
            linkedinUrl={Sam.linkedinUrl}
          />
        </ul>
        <ul
          role="list"
          className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
        >
          <PersonSquare
            key={Dennis.name}
            name={Dennis.name}
            role={Dennis.role}
            imageUrl={Dennis.imageUrl}
            linkedinUrl={Dennis.linkedinUrl}
          />
          <PersonSquare
            key={Maritza.name}
            name={Maritza.name}
            role={Maritza.role}
            imageUrl={Maritza.imageUrl}
            linkedinUrl={Maritza.linkedinUrl}
          />
          <PersonSquare
            key={Mark.name}
            name={Mark.name}
            role={Mark.role}
            imageUrl={Mark.imageUrl}
            linkedinUrl={Mark.linkedinUrl}
          />
        </ul>
      </div>
    </div>
  )
}

const PersonSquare = props => {
  const salesBioImgStyle = css`
    ${tw`mx-auto h-28 w-28 rounded-full xl:w-32 xl:h-32`}
    img {
      ${tw`rounded-lg`}
    }
  `
  return (
    <li>
      <div className="space-y-2">
        <GatsbyImage
          alt={props.name}
          image={props.imageUrl}
          objectFit="cover"
          css={[salesBioImgStyle]}
        />
        <div className="space-y-1">
          <div className="text-sm leading-6 font-medium space-y-1">
            <h3>{props.name}</h3>
            <p className="text-xs text-blue-600">{props.role}</p>
          </div>
          {props.linkedinUrl && (
            <ul role="list" className="flex justify-center space-x-5">
              <li>
                <a
                  href={props.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-500"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </li>
  )
}

export default MeetOurTeam
