import { Outlet, createRootRoute } from '@tanstack/react-router'

import Background from '@/components/Background'

export const Route = createRootRoute({
  component: () => (
    <>
      <Background />
      {/* <Header /> */}
      <Outlet />
    </>
  ),
})
