import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import ProfileAvatar from "../../components/ui/ProfileAvatar.jsx";
import Input from "../../components/ui/Input.jsx";
import Button from "../../components/ui/Button.jsx";
import { mockCustomer } from "../../data/mockdata.js";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  birthday: z.string().optional(),
  preferredLocation: z.string().optional(),
  favoriteDrink: z.string().optional(),
});

export default function Profile() {
  const [saved, setSaved] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: mockCustomer,
  });

  const onSubmit = async (data) => {
    // await api.put("/my-mickeys/profile", data);
    await new Promise((r) => setTimeout(r, 400));
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };

  return (
    <div className="space-y-6">
      <header>
        <p className="eyebrow">Profile</p>
        <h1 className="mt-1 font-serif text-3xl font-semibold text-plum">Your Details</h1>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} className="card-warm space-y-6 p-6">
        <div className="flex items-center gap-4">
          <ProfileAvatar
            firstName={mockCustomer.firstName}
            lastName={mockCustomer.lastName}
            size="xl"
          />
          <div>
            <Button type="button" variant="outline" size="sm">Change Photo</Button>
            <p className="mt-2 text-xs text-plum/50">JPG or PNG. Max 2 MB.</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="First Name" {...register("firstName")} error={errors.firstName?.message} />
          <Input label="Last Name"  {...register("lastName")}  error={errors.lastName?.message} />
          <Input label="Email" type="email" {...register("email")} error={errors.email?.message} />
          <Input label="Phone" type="tel"   {...register("phone")} error={errors.phone?.message} />
          <Input label="Birthday" type="date" {...register("birthday")} />
          <Input label="Favourite Drink" {...register("favoriteDrink")} />
          <div className="sm:col-span-2">
            <Input label="Preferred Location" {...register("preferredLocation")} />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button type="submit" variant="copper" disabled={isSubmitting}>
            {isSubmitting ? "Saving…" : "Save Changes"}
          </Button>
          <Button type="reset" variant="outline">Cancel</Button>
          {saved && (
            <motion.span
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sm font-medium text-green-700"
            >
              ✓ Saved
            </motion.span>
          )}
        </div>
      </form>
    </div>
  );
}