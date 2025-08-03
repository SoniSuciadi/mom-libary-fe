"use client";
import { fadeIn } from "@/app/(pages)/animate";
import { Card, styled } from "@mui/material";

const AnimatedCard = styled(Card)(({ delay }: { delay: number }) => ({
  animation: `${fadeIn} 0.5s ease-out forwards`,
  animationDelay: `${delay}ms`,
  opacity: 0,
  cursor: "pointer",
  transition: "all 0.3s ease",
  borderRadius: "12px",
  "&:hover": {
    boxShadow: "0 8px 15px rgba(0,0,0,0.12)",
    transform: "translateY(-2px)",
  },
}));

export default AnimatedCard;
