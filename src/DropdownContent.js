import React from "react";
import {
  Container,
  Section,
  DropdownItem,
  Icon,
  BlogSection,
  BlogItem,
  ImagePlaceholder,
  Button,
} from "./DropdownContent.styles";

const DropdownContent = () => {
  return (
    <Container>
      {/* Explore Our Work Section */}
      <Section>
        <h4>Explore Our Work</h4>
        <DropdownItem>
          <Icon>🌟</Icon>
          <div>
            <strong>Volunteer Now</strong> - Join our community of changemakers today!
          </div>
        </DropdownItem>
        <DropdownItem>
          <Icon>📁</Icon>
          <div>
            <strong>Our Projects</strong> - Discover initiatives making a difference in lives.
          </div>
        </DropdownItem>
        <DropdownItem>
          <Icon>📞</Icon>
          <div>
            <strong>Get Support</strong> - Find resources and assistance for your needs.
          </div>
        </DropdownItem>
        <DropdownItem>
          <Icon>📧</Icon>
          <div>
            <strong>Contact Us</strong> - We’d love to hear from you anytime!
          </div>
        </DropdownItem>
      </Section>

      {/* Latest Articles Section */}
      <Section>
        <h4>Latest Articles</h4>
        <DropdownItem>
          <Icon>📰</Icon>
          <div>
            <strong>Volunteer Stories</strong> - Read inspiring stories from our volunteers.
          </div>
        </DropdownItem>
        <DropdownItem>
          <Icon>🎉</Icon>
          <div>
            <strong>Upcoming Events</strong> - Join us for exciting events and activities.
          </div>
        </DropdownItem>
        <DropdownItem>
          <Icon>📄</Icon>
          <div>
            <strong>Blog Updates</strong> - Stay updated with our latest blog posts.
          </div>
        </DropdownItem>
        <DropdownItem>
          <Icon>🗞</Icon>
          <div>
            <strong>News & Media</strong> - Explore our latest news and media coverage.
          </div>
        </DropdownItem>
      </Section>

      {/* From Our Blog Section */}
      <BlogSection>
        <h4>From Our Blog</h4>
        <BlogItem>
          <ImagePlaceholder />
          <div>
            <h5>Volunteer Impact</h5>
            <p>Learn how volunteers are changing lives.</p>
            <a href="#">Read more</a>
          </div>
        </BlogItem>
        <BlogItem>
          <ImagePlaceholder />
          <div>
            <h5>Community Events</h5>
            <p>Discover events that bring us together.</p>
            <a href="#">Read more</a>
          </div>
        </BlogItem>
        <Button>Button ➡</Button>
      </BlogSection>
    </Container>
  );
};

export default DropdownContent;
