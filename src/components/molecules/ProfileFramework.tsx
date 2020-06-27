import React from "react"
import ProfileBase from "./ProfileBase"

const items = [
  {
    text: "Ruby on Rails",
    iconClass: "fas fa-check",
  },
  {
    text: "React, Next.js",
    iconClass: "fas fa-check",
  },
  {
    text: "Vue.js, Nuxt.js",
    iconClass: "fas fa-check",
  },
  {
    text: "React Native",
    iconClass: "fas fa-check",
  },
  {
    text: "jQuery",
    iconClass: "fas fa-check",
  },
]

const ProfileFramework: React.FC = () => {
  return <ProfileBase title="使用フレームワーク・ライブラリ" items={items} />
}

export default ProfileFramework
