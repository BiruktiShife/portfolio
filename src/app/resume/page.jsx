import { MotionButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { transition, variants } from "@/utils/framer_variants";
import {
  TabsContent,
  TabsList,
  TabsTrigger,
  MotionTabs,
} from "@/components/ui/tabs";
import { MotionDiv, MotionImage } from "@/utils/motionTags";

export default function Resume() {
  return (
    <>
      <div
        className={cn(
          "max-w-4xl mx-auto 2xl:pt-60 pt-32 px-3 pb-4 min-h-screen"
        )}
      >
        <div className="flex md:flex-row flex-col md:gap-0 gap-7 items-center justify-between w-full">
          <div className="flex sm:flex-row flex-col gap-x-7 sm:gap-y-0 gap-y-4 items-center">
            <MotionImage
              initial="initial"
              animate="animate"
              variants={variants.scale}
              transition={transition.scale}
              src="/picc.png"
              width={155}
              height={155}
              className="md:w-36 w-28"
              alt="avatar"
            ></MotionImage>
            <MotionDiv
              initial="initial"
              animate="animate"
              variants={variants.moveDown}
              transition={transition.moveDown}
              className="sm:text-left text-center"
            >
              <h3 className="mb-2">
                Biruktawit <span>Shiferaw.</span>
              </h3>
              <h5>AddisAbaba, Ethiopia</h5>
            </MotionDiv>
          </div>
          <MotionButton
            initial="initial"
            animate="animate"
            variants={variants.moveDown}
            transition={transition.moveDown}
            variant="outline"
            size="lg"
          >
            Software Engineer.
          </MotionButton>
        </div>
        <MotionTabs
          initial="initial"
          animate="animate"
          variants={variants.moveUp}
          transition={transition.moveUp}
          defaultValue="about"
          className="leading-7 mt-10"
        >
          <TabsList>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <h6>Who I&apos;m </h6>
            <p className="text-accent-foreground mt-2">
              I’m Biruktawit Shiferaw, a Full-Stack Web Developer with a passion
              for crafting dynamic, user-friendly digital solutions. With
              experience developing platforms like a Virtual Internship Platform
              at Ethiotelecom, I specialize in ReactJS, Next.js, Node.js, and
              MongoDB, delivering responsive front-end interfaces and scalable
              back-end systems. As an active member of WKUCPC and UNAET_WKU, I
              thrive on collaboration, problem-solving, and continuous learning.
              Fluent in English and Amharic, I aim to build innovative solutions
              that elevate user experiences and create meaningful impact.
            </p>
          </TabsContent>
          <TabsContent value="skills">
            <h6>What I can do</h6>
            <p className="text-accent-foreground mt-2">
              I am a versatile Full-Stack Web Developer with expertise in both
              front-end and back-end technologies, including ReactJS,
              JavaScript, NextJS, NodeJS, Python, and more. I have hands-on
              experience developing innovative and impactful digital solutions,
              such as a Virtual Internship Platform during my role as a
              Full-Stack Developer Intern. My skill set extends to database
              management with Oracle, MySQL, PostgreSQL, and MongoDB, enabling
              me to create efficient, scalable, and robust systems. I am
              passionate about solving complex challenges and take pride in
              crafting seamless user experiences that bridge the gap between
              design and functionality.
            </p>
          </TabsContent>
          <TabsContent value="experience">
            <h6>My Work</h6>
            <p className="text-accent-foreground mt-2">
              I am a dedicated Full-Stack Web Developer passionate about
              creating innovative and user-centric digital solutions. By
              combining my technical expertise with a keen eye for design, I
              develop applications that are both visually compelling and highly
              functional. My work reflects a commitment to excellence, ensuring
              that every feature and interaction enhances the user experience.
              With a focus on scalability and performance, I continuously push
              the boundaries of web development, delivering impactful projects
              that redefine how users engage with technology.
            </p>
          </TabsContent>
        </MotionTabs>
      </div>
    </>
  );
}
