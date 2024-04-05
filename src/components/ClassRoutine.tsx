import { cn } from "@/lib/utils";
import { UserCheck, UserX } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const routine = [
  {
    classNo: "01",
    instructor: "Adil Rashid",
    date: "5th Jan, 2024",
    time: "2:00 pm - 4:00 pm",
    attendance: "Present",
    classLink: "https://example.com",
  },
  {
    classNo: "02",
    instructor: "Adil Rashid",
    date: "5th Jan, 2024",
    time: "2:00 pm - 4:00 pm",
    attendance: "Absent",
    classLink: "https://example.com",
  },
  {
    classNo: "03",
    instructor: "Adil Rashid",
    date: "5th Jan, 2024",
    time: "2:00 pm - 4:00 pm",
    attendance: "--/--",
    classLink: "https://example.com",
  },
  {
    classNo: "04",
    instructor: "Adil Rashid",
    date: "5th Jan, 2024",
    time: "2:00 pm - 4:00 pm",
    attendance: "--/--",
    classLink: "https://example.com",
  },
  {
    classNo: "05",
    instructor: "Adil Rashid",
    date: "5th Jan, 2024",
    time: "2:00 pm - 4:00 pm",
    attendance: "--/--",
    classLink: "https://example.com",
  },
  {
    classNo: "06",
    instructor: "Adil Rashid",
    date: "5th Jan, 2024",
    time: "2:00 pm - 4:00 pm",
    attendance: "--/--",
    classLink: "https://example.com",
  },
  {
    classNo: "07",
    instructor: "Adil Rashid",
    date: "5th Jan, 2024",
    time: "2:00 pm - 4:00 pm",
    attendance: "--/--",
    classLink: "https://example.com",
  },
  {
    classNo: "08",
    instructor: "Adil Rashid",
    date: "5th Jan, 2024",
    time: "2:00 pm - 4:00 pm",
    attendance: "--/--",
    classLink: "https://example.com",
  },
];

const ClassRoutine = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-[20px]">Class Routine</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="">
            <TableHeader className="[&_tr]:border-none">
              <TableRow>
                <TableHead className="w-[100px] text-center font-medium text-black">
                  Class No
                </TableHead>
                <TableHead className="text-center font-medium text-black">
                  Instructor
                </TableHead>
                <TableHead className="text-center font-medium text-black">
                  Date
                </TableHead>
                <TableHead className="text-center font-medium text-black">
                  Time
                </TableHead>
                <TableHead className="text-center font-medium text-black">
                  Attendance
                </TableHead>
                <TableHead className="text-center font-medium text-black">
                  Class Link
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {routine.map((item, index) => (
                <TableRow key={item.classNo} className="border-none">
                  <TableCell className="text-center">
                    <div
                      className={cn(
                        index <= 1
                          ? "border-l-4 border-[#199305]"
                          : "border-l-4 border-[#FFB606]",
                        "bg-[#F6F6F6] py-2"
                      )}
                    >
                      {item.classNo}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="bg-[#F6F6F6] py-2">{item.instructor}</div>
                  </TableCell>
                  <TableCell className="text-center">
                    {" "}
                    <div className="bg-[#DDDDDD] py-2">{item.date}</div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="bg-[#DDDDDD] py-2">{item.time}</div>
                  </TableCell>
                  <TableCell
                    className={cn(
                      item.attendance === "Present" && "text-green-500",
                      item.attendance === "Absent" && "text-red-500",
                      "text-center"
                    )}
                  >
                    <div className="bg-[#F6F6F6] p-2 flex items-center justify-center gap-2">
                      <span>
                        {item.attendance === "Present" && (
                          <UserCheck className="w-4 h-4" />
                        )}
                        {item.attendance === "Absent" && (
                          <UserX className="w-4 h-4" />
                        )}
                      </span>
                      <span>{item.attendance}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center flex justify-center items-center gap-3 ">
                    <div className="bg-[#BCBBCC] text-white p-2 rounded-full hover:bg-[#26235B] transition-all duration-300">
                      <Link href={item.classLink} className="">
                        Google Meet
                      </Link>
                    </div>
                    <div className="bg-[#FFE8B2] text-[#565656] p-2 rounded-full hover:bg-[#FFB606] transition-all duration-300">
                      <Link href={item.classLink} className="">
                        Share
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {/* <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter> */}
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClassRoutine;
