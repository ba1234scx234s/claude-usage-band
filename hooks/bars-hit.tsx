import type { ClientModule } from 'claude-code'

// The bars' click area on the desktop: an empty region laid over the bars. A press on
// it expands or collapses the band; it draws nothing of its own
const BarsHit: ClientModule = (_props, surface) => {
  surface.onPointer(e => {
    if (e.type === 'down' && e.button === 'left') surface.post('toggle')
  })
  const { Box } = surface.elements
  return <Box />
}

export default BarsHit
