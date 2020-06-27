import React from "react"
import ProfileBase from "./ProfileBase"

const items = [
  {
    text: "GitHub",
    iconClass: "fab fa-github",
    to: "https://github.com/greendrop",
  },
]

const ProfileLink: React.FC = () => {
  return <ProfileBase title="リンク" items={items} />
}

export default ProfileLink
