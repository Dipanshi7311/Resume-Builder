import Image from 'next/image';

const persons = [
  {
    name: 'Dipanshi Sharma',
    role: 'Frontend developer',
    avatar:
      'https://avatars.githubusercontent.com/u/115554635?u=65a4ef0612fbe82d8da019ee407c7b6f56e209b1&v=4',
    github: 'https://github.com/Dipanshi7311',
    linkedin: 'https://www.linkedin.com/feed/',
  },
];

const PersonCard = ({ children }: { children: React.ReactNode }) => (
  <div className="transition ease-in-out delay-100 duration-300 px-6 py-8 flex flex-col items-center text-center shadow hover:shadow-xl rounded-xl border-2 border-resume-50 hover:border-resume-100">
    {children}
  </div>
);

const ProfileSocial = ({ github, linkedin }: { github: string; linkedin: string }) => (
  <div className="flex gap-4">
    <a href={github} target="_blank">
      <Image src="/icons/github.svg" alt="github" width="24" height="24" />
    </a>
    <a href={linkedin} target="_blank">
      <Image src="/icons/linkedin.svg" alt="linkedin" width="24" height="24" />
    </a>
  </div>
);

export default function Person() {
  return (
    <>
      {persons.map((person) => (
        <PersonCard key={person.name}>
          <Image
            src={person.avatar}
            alt={person.name}
            className="rounded-full"
            height="96"
            width="96"
          />
          <p className="text-resume-800 mt-4 font-bold">{person.name}</p>
          <p className="text-resume-400 mb-6">{person.role}</p>
          <ProfileSocial github={person.github} linkedin={person.linkedin} />
        </PersonCard>
      ))}
    </>
  );
}
