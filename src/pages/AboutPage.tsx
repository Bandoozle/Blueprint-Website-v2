import React from "react";
import PageContainer from "../components/layout/PageContainer";
import MemberCard from "../components/shared/MemberCard";

const AboutPage = () => {
  return (
    <PageContainer className="py-16">
      <h1 className="text-3xl font-semibold mb-8">About Page</h1>
      <p className="mb-10 text-blueprint-black/80">
        MemberCard demo (temporary).
      </p>
      <div className="flex flex-wrap gap-[18px]">
        <div className="min-w-[224px] flex-1">
          <MemberCard
            name="Iris au-yeung"
            role="PRODUCT DESIGNER"
            roleType="designer"
            linkedinUrl="https://linkedin.com/in/example"
          />
        </div>
        <div className="min-w-[224px] flex-1">
          <MemberCard
            name="Jane Smith"
            role="PROJECT MANAGER"
            roleType="pm"
            linkedinUrl="https://linkedin.com/in/example"
          />
        </div>
        <div className="min-w-[224px] flex-1">
          <MemberCard
            name="Alex Dev"
            role="SENIOR DEVELOPER"
            roleType="dev"
            linkedinUrl="https://linkedin.com/in/example"
          />
        </div>
        <div className="min-w-[224px] flex-1">
          <MemberCard
            name="Sam Exec"
            role="EXECUTIVE"
            roleType="exec"
            linkedinUrl="https://linkedin.com/in/example"
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default AboutPage;