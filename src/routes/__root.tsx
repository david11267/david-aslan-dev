import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanstackDevtools } from '@tanstack/react-devtools'

import Header from '../components/Header'
import Background from '@/components/Background'

export const Route = createRootRoute({
  component: () => (
    <>
      <Background />
      <Header />
      <main className="flex justify-center mt-32">
        <div className="flex flex-col">
          <Outlet />
        </div>
      </main>
      <TanstackDevtools
        config={{
          position: 'bottom-left',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  ),
})
