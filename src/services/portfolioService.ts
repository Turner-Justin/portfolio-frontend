const fakeProjects = [
  {
    id: 1,
    title: "AWS DNS LAB",
    description: "Route53 + EC2 Hybrid DNS setup"
  },
  {
    id: 2,
    title: "Portfolio Server",
    description: "FastAPI backend for dynamic portfolio content"
  }
];

export function getProjects(): Promise<any[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(fakeProjects), 1000);
  });
}