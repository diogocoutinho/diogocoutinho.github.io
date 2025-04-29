"use client";

interface ContactProps {
  onSubmit: (data: { name: string; email: string; message: string }) => void;
}

export default function Contact({ onSubmit }: ContactProps) {
  return (
    <div className="max-w-md mx-auto">
      <form 
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          onSubmit({
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
          });
        }}
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            required
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Mensagem"
            rows={4}
            required
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-lg transition-colors"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}
