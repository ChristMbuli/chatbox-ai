import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Bot, Send, User, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      content:
        "Bonjour ! Je suis SUP'RH-AI, votre assistant RH virtuel. Comment puis-je vous aider aujourd'hui ?",
      role: "assistant",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const scrollAreaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim()) {
      const userMessage = {
        id: Date.now().toString(),
        content: input.trim(),
        role: "user",
      };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);

      setTimeout(() => {
        const aiMessage = {
          id: (Date.now() + 1).toString(),
          content:
            "Je traite votre demande. En tant qu'assistant RH, je suis là pour vous aider avec toutes vos questions relatives aux ressources humaines.",
          role: "assistant",
        };
        setMessages((prev) => [...prev, aiMessage]);
        setIsLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [scrollAreaRef.current]);

  return (
    <>
      <div className="w-full max-w-2xl mx-auto mt-4">
        <Link to="/">
          <Button className="mb-4">Retour à l'accueil</Button>
        </Link>
      </div>
      <Card className="w-full max-w-2xl mx-auto h-[600px] flex flex-col mt-[5%]">
        <CardHeader className="border-b px-6 py-3 flex flex-row items-center space-x-2">
          <Bot className="h-6 w-6 text-primary" />
          <div>
            <h2 className="text-lg font-bold">SUP'RH-AI</h2>
            <p className="text-sm text-muted-foreground">Assistant Virtuel</p>
          </div>
        </CardHeader>
        <CardContent className="flex-1 p-4 overflow-hidden">
          <ScrollArea ref={scrollAreaRef} className="h-full pr-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-start gap-3 text-sm",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {message.role === "assistant" && (
                    <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md bg-primary text-primary-foreground">
                      <Bot className="h-4 w-4" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "rounded-lg px-4 py-2 max-w-[80%]",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    {message.content}
                  </div>
                  {message.role === "user" && (
                    <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md bg-primary text-primary-foreground">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>SUP'RH-AI est en train d'écrire...</span>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="border-t p-4">
          <form
            onSubmit={handleSubmit}
            className="flex w-full items-center space-x-2"
          >
            <Input
              type="text"
              placeholder="Écrivez votre message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading || !input.trim()}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Envoyer le message</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </>
  );
};

export default ChatBox;
