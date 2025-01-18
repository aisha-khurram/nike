import { createClient, SanityClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "NEXT_PUBLIC_SANITY_PROJECT_ID",
  dataset: "product",
  apiVersion,
  useCdn: true,
  token: "skp35OrUBMRTOLcmwUA80qUhd6DnwF2P6sxRZrsBedoXuCn8x2eL6J5KknyysL4yF7owdeIL7yaMAKcpRvuxcAYLF8eiq3d8pwwAHrYIEbDcT9cuJRzIyejWR1eP2gfEj66Wz1bf78ehJSK6YgyOkjIoAGrj5rtuSciySDVEI2ttudqW3bBm" // Set to false if statically generating pages, using ISR or tag-based revalidation
})
