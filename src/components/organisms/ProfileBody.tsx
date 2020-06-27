import React from "react"
import Box from "@material-ui/core/Box"
import ProfileLink from "../../components/molecules/ProfileLink"
import ProfileProgramLanguage from "../../components/molecules/ProfileProgramLanguage"
import ProfileFramework from "../../components/molecules/ProfileFramework"
import ProfileQualification from "../../components/molecules/ProfileQualification"

const ProfileBody: React.FC = () => {
  return (
    <React.Fragment>
      <Box my={3}>
        <ProfileLink />
      </Box>
      <Box my={3}>
        <ProfileProgramLanguage />
      </Box>
      <Box my={3}>
        <ProfileFramework />
      </Box>
      <Box my={3}>
        <ProfileQualification />
      </Box>
    </React.Fragment>
  )
}

export default ProfileBody
