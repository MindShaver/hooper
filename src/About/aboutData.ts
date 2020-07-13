interface IAboutData {
  aboutImage: string;
  aboutBio: string[];
}

export const AboutData: IAboutData = {
  aboutImage: process.env.PUBLIC_URL + "/images/about-image.png",
  aboutBio: [
    `Wesley Hooper is a ceramic and mixed media artist living in
        Florence, Alabama. He received his Bachelor of Fine Arts Degree
        with a concentration in Ceramics and Sculpture from the
        University of North Alabama in 2016, and is also the Visual Arts
        Instructor at Cherokee High School for grades seven through
        twelve. He's had a lifelong interest in art, but his passion did
        not truly begin until he discovered clay in college. Though he
        dabbled in different art forms and media, clay is his preference
        and is a foundational material for most of his work.`,
    `Wesley found his work constantly evolving, and it certainly has
        since undergrad. His sculptural work in college revolved mostly
        around inward reflections, personal struggles, and the overall
        human condition. His most current work has focused heavily on
        aspects of nature and its processes such as the effects of time,
        decay, and revitalization. Although his body of work tends to
        vary in subject, he finds they all contain overtones of his
        attitude towards life and death.`,
    `Wesley creates pottery as a means for making art more readily
        available to the public. Almost everyone will use some type of
        pottery in their lifetime, and there is something powerful about
        utilitarian objects that have been made by hand. When he hand
        builds pottery, he is literally investing himself into each
        piece. No two pieces are alike. He often uses natural materials
        such as rocks or fossils that he has found in the environment to
        create unique impressions in the work. Each piece will have
        "flaws" that he believes makes the work more special, and it
        puts him in a mindset of what it might have been like to create
        vessels in a primal time when they fostered not only survival,
        but the growth of civilization.`,
  ],
};
