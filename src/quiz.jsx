import React, { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  LinearProgress,
  Divider,
  useScrollTrigger,
  Slide,
  Fab,
} from "@mui/material";
import { keyframes } from "@emotion/react";
// Animations
const gradient = keyframes`
 0% { background-position: 0% 50%; }
 50% { background-position: 100% 50%; }
 100% { background-position: 0% 50%; }
`;
const lessons = [
  {
    title: "English Tenses",
    content: `Tenses are the backbone of English grammar, as they help indicate when an action takes place—whether in the past, present, or future. There are three main tenses, each of which is further divided into four forms: simple, continuous, perfect, and perfect continuous. Understanding these tenses allows speakers and writers to express time-related events accurately.
1. Present Tense 
• Simple Present: Used for general truths, habits, and routines.
  Example: “She writes a letter every day.”
• Present Continuous: Describes an action happening right now or a planned future event.
  Example: “She is writing a letter at the moment.”
• Present Perfect: Refers to an action that happened at an unspecified time before now or has a connection to the present.
  Example: “She has written several letters today.”
• Present Perfect Continuous: Describes an action that started in the past and is still ongoing.
  Example: “She has been writing letters since morning.”

2. Past Tense
• Simple Past: Describes completed actions in the past.
  Example: “She wrote a letter yesterday.”
• Past Continuous: Refers to an action that was happening at a specific time in the past.
  Example: “She was writing a letter when the phone rang.”
• Past Perfect: Expresses an action that was completed before another past action.
  Example: “She had written the letter before he arrived.”
• Past Perfect Continuous: Describes a past action that continued for some time before another event.
  Example: “She had been writing for hours before she finished the letter.”

3. Future Tense
• Simple Future: Describes an action that will happen in the future.
  Example: “She will write a letter tomorrow.”
• Future Continuous: Refers to an action that will be in progress at a certain time in the future.
  Example: “She will be writing a letter at 8 PM.”
• Future Perfect: Indicates an action that will be completed before a specific time in the future.
  Example: “She will have written the letter by tomorrow.”
• Future Perfect Continuous: Describes an action that will have been continuing for a certain period before a specific time in the future.
  Example: “She will have been writing for two hours by the time you arrive.”

By mastering tenses, learners can accurately describe when actions occur and avoid common errors related to time expressions.`,
    color: "#6366f1",
  },
  {
    title: "Parts of Speech",
    content: `Words in English are categorized into eight parts of speech, each with a unique function in a sentence. Understanding how these parts of speech work allows learners to construct sentences correctly and enhance their writing skills.

1. Nouns: Words that name a person, place, thing, or idea.
   Example: “The dog is barking.”
2. Pronouns: Words that replace nouns to avoid repetition.
   Example: “He is reading a book.”
3. Verbs: Words that express action or state of being.
   Example: “She runs every morning.”
4. Adjectives: Words that describe or modify nouns.
   Example: “The beautiful garden is full of flowers.”
5. Adverbs: Words that modify verbs, adjectives, or other adverbs.
   Example: “She sings beautifully.”
6. Prepositions: Words that show relationships between nouns or pronouns and other words in a sentence.
   Example: “The book is on the table.”
7. Conjunctions: Words that connect words, phrases, or clauses.
   Example: “I wanted to go out, but it started raining.”
8. Interjections: Words that express strong emotions.
   Example: “Wow! That was an amazing performance!”

Each part of speech plays a crucial role in sentence construction. Proper usage enhances clarity and ensures that ideas are communicated effectively.`,
    color: "#10b981",
  },
  {
    title: "Sentence Structure",
    content: `A well-structured sentence is essential for conveying meaning clearly. Every sentence consists of key elements that determine its effectiveness.

1. Subject and Predicate
• The subject is the main noun or pronoun that the sentence is about.
• The predicate contains the verb and provides information about the subject.
  Example: “The cat (subject) is sleeping on the sofa (predicate).”

2. Objects
• Direct Object: Receives the action of the verb.
  Example: “She read a book.”
• Indirect Object: Indicates to whom or for whom the action is done.
  Example: “She gave her friend a gift.”

3. Phrases and Clauses
• A phrase is a group of words that work together but do not contain both a subject and a verb.
  Example: “In the morning, she goes for a walk.”
• A clause contains both a subject and a verb and can be independent or dependent.
  Example: “She went outside because the weather was nice.”

4. Sentence Types
• Simple Sentence: Contains one independent clause.
  Example: “She loves to read.”
• Compound Sentence: Contains two independent clauses joined by a conjunction.
  Example: “She loves to read, and she enjoys writing.”
• Complex Sentence: Contains one independent clause and at least one dependent clause.
  Example: “She loves to read because it helps her learn.”
• Compound-Complex Sentence: Contains two or more independent clauses and at least one dependent clause.
  Example: “She loves to read because it helps her learn, and she enjoys writing stories.”

Mastering sentence structure improves writing clarity and ensures proper communication in both spoken and written English.`,
    color: "#3b82f6",
  },
];

const quizData = [
  {
    question: "Which of the following sentences is in the past perfect tense?",
    options: [
      "A) She writes a letter.",
      "B) She was writing a letter.",
      "C) She had written a letter before he arrived.",
      "D) She will write a letter tomorrow.",
    ],
    correct: "C) She had written a letter before he arrived.",
  },
  {
    question:
      "Which part of speech modifies a verb, adjective, or another adverb?",
    options: ["A) Adjective", "B) Pronoun", "C) Adverb", "D) Preposition"],
    correct: "C) Adverb",
  },
  {
    question:
      "What is the subject in the sentence: 'The little boy played in the park'?",
    options: [
      "A) The little boy",
      "B) Played",
      "C) In the park",
      "D) The park",
    ],
    correct: "A) The little boy",
  },
  {
    question: "Which sentence is a compound sentence?",
    options: [
      "A) She loves to read.",
      "B) She loves to read because it helps her learn.",
      "C) She loves to read, and she enjoys writing.",
      "D) Because she loves to read, she learns new things.",
    ],
    correct: "C) She loves to read, and she enjoys writing.",
  },
  {
    question: "What is the function of a preposition in a sentence?",
    options: [
      "A) To express action",
      "B) To show the relationship between a noun and another word",
      "C) To replace a noun",
      "D) To connect clauses",
    ],
    correct: "B) To show the relationship between a noun and another word",
  },
];

function AnimatedCard({ children, delay = 0 }) {
  return (
    <Card
      sx={{
        transform: "translateY(20px)",
        opacity: 0,
        animation: `0.6s ease ${delay}s forwards cardEnter`,
        "@keyframes cardEnter": {
          to: { opacity: 1, transform: "translateY(0)" },
        },
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(12px)",
        borderRadius: "16px",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        transition: "transform 0.3s ease",
        "&:hover": { transform: "translateY(-8px)" },
      }}
    >
      {children}
    </Card>
  );
}
function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const handleAnswer = (option) => {
    if (option === quizData[currentQuestion].correct) {
      setScore(score + 1);
    }
    setSelectedAnswer(option);
  };
  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizStarted(false);
  };
  return (
    <AnimatedCard delay={0.4}>
      <CardContent>
        {!quizStarted ? (
          <Box textAlign="center">
            <Typography variant="h6" mb={2}>
              Test Your Knowledge
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => setQuizStarted(true)}
              sx={{
                background: "linear-gradient(45deg, #3b82f6 30%, #6366f1 90%)",
                boxShadow: "0 4px 12px rgba(59, 130, 246, 0.25)",
              }}
            >
              Start Quiz
            </Button>
          </Box>
        ) : showResult ? (
          <Box textAlign="center">
            <Typography variant="h6" mb={2}>
              Your Score: {score}/{quizData.length}
            </Typography>
            <Button
              variant="contained"
              onClick={restartQuiz}
              sx={{
                background: "linear-gradient(45deg, #10b981 30%, #3b82f6 90%)",
              }}
            >
              Try Again
            </Button>
          </Box>
        ) : (
          <>
            <LinearProgress
              variant="determinate"
              value={((currentQuestion + 1) / quizData.length) * 100}
              sx={{ mb: 2, height: 8, borderRadius: 4 }}
            />
            <Typography variant="h6" mb={2}>
              {quizData[currentQuestion].question}
            </Typography>
            <Box display="grid" gap={2}>
              {quizData[currentQuestion].options.map((option) => (
                <Button
                  key={option}
                  variant="outlined"
                  onClick={() => handleAnswer(option)}
                  disabled={!!selectedAnswer}
                  color={
                    selectedAnswer === option
                      ? option === quizData[currentQuestion].correct
                        ? "success"
                        : "error"
                      : "primary"
                  }
                  sx={{
                    textTransform: "none",
                    justifyContent: "flex-start",
                    py: 1.5,
                    borderWidth: 2,
                    "&:disabled": { borderWidth: 2 },
                  }}
                >
                  {option}
                  {selectedAnswer === option && (
                    <Chip
                      label={
                        option === quizData[currentQuestion].correct
                          ? "✓ Correct"
                          : "✗ Wrong"
                      }
                      color={
                        option === quizData[currentQuestion].correct
                          ? "success"
                          : "error"
                      }
                      size="small"
                      sx={{ ml: "auto", fontWeight: 700 }}
                    />
                  )}
                </Button>
              ))}
            </Box>
            {selectedAnswer && (
              <Box mt={3} textAlign="right">
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{
                    background:
                      "linear-gradient(45deg, #3b82f6 30%, #6366f1 90%)",
                    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.25)",
                  }}
                >
                  {currentQuestion === quizData.length - 1
                    ? "Finish"
                    : "Next Question"}
                </Button>
              </Box>
            )}
          </>
        )}
      </CardContent>
    </AnimatedCard>
  );
}
export default function ModernGrammarSite() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(-45deg, #f3f4ff, #fef2ff, #eff6ff)`,
        backgroundSize: "400% 400%",
        animation: `${gradient} 15s ease infinite`,
      }}
    >
      <Box
        sx={{
          pt: { xs: 12, md: 20 },
          pb: { xs: 8, md: 16 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "200%",
            height: "200%",
            top: "-50%",
            left: "-50%",
            background: `radial-gradient(circle, #6366f122 0%, transparent 70%)`,
            transform: "rotate(30deg)",
          },
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            align="center"
            sx={{
              fontWeight: 800,
              background: "linear-gradient(45deg, #6366f1 30%, #3b82f6 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 4px 8px rgba(99, 102, 241, 0.2))",
            }}
          >
            Website Name
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <AnimatedCard delay={0.2}>
          <CardContent>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              About:
            </Typography>
            <Typography paragraph sx={{ fontSize: "1.1rem" }}>
              Welcome to your go-to resource for mastering English grammar!
              Whether you’re a student, teacher, or language enthusiast, this
              platform is designed to make grammar learning easy, engaging, and
              effective. <br /> Why is English Grammar Important? Grammar is the
              foundation of communication.
              <br /> It helps us construct clear, meaningful sentences and
              express our thoughts correctly.
              <br /> Whether you’re writing an email, preparing for an exam, or
              speaking in public, good grammar ensures clarity and
              professionalism.
            </Typography>
          </CardContent>
        </AnimatedCard>
      </Container>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 800,
            mb: 6,
            background: "linear-gradient(45deg, #10b981 30%, #3b82f6 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Featured Lessons
        </Typography>
        <Box sx={{ display: "grid", gap: 4 }}>
          {lessons.map((lesson, index) => (
            <AnimatedCard key={index} delay={0.3 + index * 0.1}>
              <CardContent
                sx={{
                  borderLeft: `4px solid ${lesson.color}`,
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: `linear-gradient(45deg, ${lesson.color}22, transparent)`,
                  },
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                  {lesson.title}
                </Typography>
                <Typography
                  sx={{ color: "text.secondary", whiteSpace: "pre-line" }}
                >
                  {lesson.content}
                </Typography>
              </CardContent>
            </AnimatedCard>
          ))}
        </Box>
      </Container>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <QuizSection />
      </Container>
      <Box
        component="footer"
        sx={{
          py: 6,
          bgcolor: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
            Created by Huthayl, Email: Huthayl@hotmail.com
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
