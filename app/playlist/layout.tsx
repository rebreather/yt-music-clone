import React from 'react'

const layout = ({ children }: any) => {
  return (
    <div>
        layout이 먼저 될걸ㄹ?
        {children}
    </div>
  )
}

export default layout