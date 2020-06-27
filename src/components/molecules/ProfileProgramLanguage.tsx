import React from "react"
import ProfileBase from "./ProfileBase"

const items = [
  {
    text: "Ruby",
    iconClass: "fas fa-check",
  },
  {
    text: "JavaScript",
    iconClass: "fas fa-check",
  },
  {
    text: "TypeScript",
    iconClass: "fas fa-check",
  },
  {
    text: "Go",
    iconClass: "fas fa-check",
  },
  {
    text: "Java",
    iconClass: "fas fa-check",
  },
  {
    text: "VBA",
    iconClass: "fas fa-check",
  },
]

const ProfileProgramLanguage: React.FC = () => {
  return <ProfileBase title="使用プログラム言語" items={items} />
}

export default ProfileProgramLanguage
