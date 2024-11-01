import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Commit {
  user: {
    name: string;
    avatar: string;
  };
  message: string;
  date: string;
}

interface CommitHistoryProps {
  commits: Commit[];
}

export function CommitHistory({ commits }: CommitHistoryProps) {
  return (
    <Table className="overflow-auto">
      <TableHeader>
        <TableRow>
          <TableHead>USER</TableHead>
          <TableHead>COMMIT</TableHead>
          <TableHead>DATE</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {commits.map((commit, index) => (
          <TableRow key={index}>
            <TableCell>
              <div className="flex items-center gap-3 overflow-auto">
                <img
                  src={commit.user.avatar}
                  alt={`${commit.user.name}'s avatar`}
                  className="h-8 w-8 rounded-full"
                />
                <span className="font-medium">{commit.user.name}</span>
              </div>
            </TableCell>
            <TableCell>{commit.message}</TableCell>
            <TableCell>{commit.date}</TableCell>
            <TableCell>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Trash className="h-4 w-4" />
                <span className="sr-only">Copy commit details</span>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
