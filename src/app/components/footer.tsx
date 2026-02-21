export function Footer({ name }: { name: string }) {
  return (
    <footer className="w-full py-3 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 text-center text-sm text-muted-foreground">
        <span>
          &copy; {new Date().getFullYear()} {name}. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
