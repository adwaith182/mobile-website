"use client";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} contentClassName="color-box" />
    </div>
  );
}

export default WhyChooseUs;

const musicSchoolContent = [
  {
    title: "AI-Powered Diagnostics:",
    description:
      "Leveraging the power of artificial intelligence, Vitus provides advanced diagnostic capabilities, enabling early detection of potential health issues.",
    video: "/images/videos/ai.mp4",
  },
  {
    title: "Anomaly Detection:",
    description:
      "By comparing past health data records, Vitus's AI algorithms can identify anomalies that may indicate potential future health issues, allowing for proactive intervention.",
    video: "/images/videos/AnoDetect.mp4",
  },
  {
    title: "Medical Grade Signal Processing:",
    description:
      "Our proprietary signal conditioning, filtering, and reconstruction technologies ensure that the signals extracted from the body are of medical-grade quality, enhancing the accuracy of health assessments.",
    video: "/images/videos/Medigrade.mp4",
  },
];
