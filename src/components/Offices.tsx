import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Brisbane" invert={invert}>
          300 Elizabeth Street
          <br />
          Brisbane City QLD 4000, Australia
        </Office>
      </li>
      <li>
        {/* <Office name="Sydney" invert={invert}>
          19 Castlereagh Street
          <br />
          Sydney NSW 2000, Australia
        </Office> */}
      </li>
    </ul>
  )
}
