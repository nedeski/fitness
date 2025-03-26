import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'
import dynamic from 'next/dynamic'
import MapSection from '@/components/MapSection'
import { Footer } from '@/components/Footer'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            Our fitness team is built on unwavering loyalty, ensuring that
            we&apos;re with you every step of the way, supporting you through
            every challenge and celebrating every victory.
          </GridListItem>
          <GridListItem title="Trust" invert>
            Trust is the foundation of our team; you can count on us to provide
            expert guidance, tailored programs, and constant encouragement as
            you work towards your fitness goals.
          </GridListItem>
          <GridListItem title="Compassion" invert>
            Compassion drives everything we do—our team is genuinely dedicated
            to understanding your individual needs and helping you grow in a
            supportive and caring environment.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  // {
  //   title: 'Leadership',
  //   people: [
  //     {
  //       name: 'Leslie Alexander',
  //       role: 'Co-Founder / CEO',
  //       image: { src: imageLeslieAlexander },
  //     },
  //     {
  //       name: 'Michael Foster',
  //       role: 'Co-Founder / CTO',
  //       image: { src: imageMichaelFoster },
  //     },
  //     {
  //       name: 'Dries Vincent',
  //       role: 'Partner & Business Relations',
  //       image: { src: imageDriesVincent },
  //     },
  //   ],
  // },
  {
    title: 'Team',
    people: [
      {
        name: 'Chelsea Hagon',
        role: 'Personal Trainer',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Emma Dorsey',
        role: 'Group Fitness Instructor',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Leonard Krasner',
        role: 'Strength and Conditioning Coach',
        image: { src: imageLeonardKrasner },
      },
      {
        name: 'Blake Reid',
        role: 'Bootcamp Instructor',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Kathryn Murphy',
        role: 'Certified Fitness Coach',
        image: { src: imageKathrynMurphy },
      },
      {
        name: 'Whitney Francis',
        role: 'Senior Fitness Instructor',
        image: { src: imageWhitneyFrancis },
      },
      {
        name: 'Jeffrey Webb',
        role: 'Rehabilitation Fitness Trainer',
        image: { src: imageJeffreyWebb },
      },
      {
        name: 'Benjamin Russel',
        role: 'Personal Trainer',
        image: { src: imageBenjaminRussel },
      },
      {
        name: 'Angela Fisher',
        role: 'Spin/Cycle Instructor',
        image: { src: imageAngelaFisher },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          Welcome to Fitness Gym, where your fitness journey begins! Our mission
          is to help you achieve your health and wellness goals in a supportive,
          motivating environment. Whether you&apos;re just starting out or are a
          seasoned athlete, we are here to guide and inspire you every step of
          the way.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            At Fitness Gym, we offer state-of-the-art equipment, expert
            trainers, and a variety of group fitness classes to cater to all
            fitness levels and interests. From high-energy cardio sessions to
            strength training, yoga, and functional fitness, we’ve got something
            for everyone.
          </p>
          <p>
            We believe that fitness is about more than just physical strength;
            it’s about mental clarity, building confidence, and feeling your
            best every day. Our team of passionate professionals is committed to
            creating a welcoming, inclusive community where everyone can thrive.
          </p>
        </div>
      </PageIntro>

      {/* <Container className="mt-16">
        <StatList>
          <StatListItem value="12" label="Underpaid employees" />
          <StatListItem value="152" label="Placated clients" />
        </StatList>
      </Container> */}
      <Container>
        <div className="mt-10 flex flex-col items-center space-y-16">
          <MapSection />
        </div>
      </Container>
      <Culture />

      <Team />

      {/* <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      /> */}

      <ContactSection />
      <Footer />
    </>
  )
}
