// src/components/Events.jsx
export default function Events() {
  const events = [
    { date: "2025-06-20", title: "Event 1", description: "Event 1 Description…" },
    { date: "2025-07-10", title: "Event 2", description: "Event 2 Description…" },
    { date: "2025-08-05", title: "Event 3", description: "Event 3 Description…" },
  ]

  return (
    <section id="event" className="p-10 bg-[#04091E]">
      <h2 className="text-3xl font-semibold text-gray-100 mb-6">
        Events Timeline
      </h2>
      <ul className="space-y-4">
        {events.map((event, idx) => (
          <li key={idx} className="p-4 bg-[#091428] rounded-md">
            <h3 className="text-2xl font-semibold text-gray-100 mb-2">
              {event.title}
            </h3>
            <p className="text-gray-400 mb-1"><strong>Date:</strong> {event.date}</p>
            <p className="text-gray-400">{event.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
