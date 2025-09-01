import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function MyAlertDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          size="lg"
          className="rounded-full bg-purple-100 hover:bg-purple-600 hover:text-white text-black text-base transition-transform hover:scale-105 duration-500"
        >
          Read More <ArrowUpRight className="ml-2 h-5 w-5" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-h-[80vh] overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-bold">
            About Us
          </AlertDialogTitle>
          <AlertDialogDescription className="space-y-4 text-[15px] leading-relaxed">
            <p>
              {/* <strong>Corporate Profile</strong> <br /> */}
              SESOR Express is a subsidiary company of Westec Corporation with
              roots deeply planted in Cambodia's business landscape for 16
              years. Our management team comprises seasoned entrepreneurs and
              tech experts from diverse backgrounds, collectively bringing a
              wealth of hands-on experience to the table.
            </p>

            <p>
              In 2020, we decided to push the boundaries of our technology
              services. Expanding into the courier realm was our bold move.
              SESOR Express emerged, unleashing express, same-day, and next-day
              deliveries, recognizing the growing need for swift and reliable
              services in an evolving market.
            </p>

            <p>
              Venturing into deliveries was a natural extension for us,
              unlocking immense growth potential. SESOR has rapidly established
              its expertise in last-mile deliveries, empowered by cutting-edge
              logistics technology, and a dedicated team that ensures
              professionalism in every parcel's journey.
            </p>

            <p>
              Aligned with this commitment, our state-of-the-art delivery app
              guarantees seamless and hassle-free deliveries, catering to parcels
              of all sizes. We aim to provide affordable and rapid deliveries,
              whether it's a small package or a substantial shipment. We
              prioritize delivering excellence and value customer satisfaction
              through a blend of professionalism and a proactive approach to
              timely service.
            </p>

            <h3 className="font-semibold text-lg">Our Vision</h3>
            <p>
              To create the largest network of last-mile delivery platforms in
              Cambodia, providing fast, reliable, and affordable delivery
              services to customers across the country. We aim to leverage
              cutting-edge technology and innovative logistics solutions to
              optimize our operations and ensure maximum efficiency. Our goal is
              to become the go-to delivery service for individuals and
              businesses alike, delivering packages of all sizes and types with
              speed, accuracy, and care. We are committed to providing
              exceptional customer service, building strong relationships with
              our clients, and contributing to the growth and development of
              Cambodia’s logistics industry.
            </p>

            <h3 className="font-semibold text-lg">Our Mission</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                To build a smart, user-friendly, reliable and dual-language
                logistics platform.
              </li>
              <li>
                To build the largest network of delivery services in Cambodia.
              </li>
              <li>To provide a fast, accurate and pleasant delivery service.</li>
              <li>
                To deliver packages of all sizes and types to individuals and
                businesses.
              </li>
              <li>
                To provide excellent customer service and strong relationships
                with our clients.
              </li>
            </ul>

            <h3 className="font-semibold text-lg">Our Quality Assurance</h3>
            <p>
              Every package picked up by our team will surely be guaranteed to
              be delivered on time and in good condition.
            </p>

            <h3 className="font-semibold text-lg">Social Responsibility</h3>
            <p>
              SESOR Express believes that all businesses should grow with the
              benefits of both the company and society as a whole. At SESOR, we
              are obligated to make sure that our services add value to our
              communities and contribute to a better quality of life.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
