import React from 'react'

function ProfileTeamCard({imgsrc, name, position, description}) {
  return (
    <div className="w-60">
        <img
            alt="..."
            src={imgsrc}
            className="w-64 align-middle rounded"
        />
        <p className="font-bold text-lg">{name}</p>
        <p className="text-sm text-gray-400">{position}</p>
        <p>{description}</p>
    </div>
  )
}

export default ProfileTeamCard