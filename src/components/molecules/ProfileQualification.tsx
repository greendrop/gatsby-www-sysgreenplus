import React from "react"
import ProfileBase from "./ProfileBase"

const items = [
  {
    text: "AWS認定ソリューションアーキテクト – アソシエイト",
    iconClass: "fas fa-check",
    secondaryText: "2018年7月",
  },
  {
    text: "LPIC レベル3 Specialty 304",
    iconClass: "fas fa-check",
    secondaryText: "2016年1月",
  },
  {
    text: "Rails4技術者認定シルバー試験",
    iconClass: "fas fa-check",
    secondaryText: "2015年4月",
  },
  {
    text: "OSS-DB Silver",
    iconClass: "fas fa-check",
    secondaryText: "2013年4月",
  },
  {
    text: "Ruby技術者認定試験 Gold",
    iconClass: "fas fa-check",
    secondaryText: "2012年9月",
  },
  {
    text: "データベーススペシャリスト試験",
    iconClass: "fas fa-check",
    secondaryText: "2010年4月",
  },
  {
    text: "オラクル認定技術者制度（オラクルマスター）10g Gold",
    iconClass: "fas fa-check",
    secondaryText: "2010年1月",
  },
  {
    text: "【OCJ-WC】Oracle認定webコンポーネントディベロッパ",
    iconClass: "fas fa-check",
    secondaryText: "2009年5月",
  },
  {
    text: "C言語プログラミング能力認定試験 2級",
    iconClass: "fas fa-check",
    secondaryText: "2000年3月",
  },
]

const ProfileQualification: React.FC = () => {
  return <ProfileBase title="資格" items={items} />
}

export default ProfileQualification
