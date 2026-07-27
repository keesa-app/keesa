import { rooms } from "@/content/marketing";

export function RoomsSection() {
  return (
    <section id="features" className="mx-auto max-w-[1200px] px-8 py-[100px]">
      <div className="mb-[44px] flex flex-wrap items-end justify-between gap-6">
        <div className="min-w-[320px] flex-[1_1_460px]">
          <span className="text-soft mb-4 block text-[14px]">
            the baby workspace
          </span>
          <h2 className="font-display m-0 max-w-[620px] text-[clamp(2rem,5.2vw,52px)] leading-[1.04] font-extrabold tracking-[-0.042em] text-balance">
            Ten rooms, and yours are already furnished.
          </h2>
        </div>
        <p className="text-body m-0 min-w-[280px] flex-[0_1_400px] text-[17px] leading-[1.65] text-pretty">
          Every decision an expecting parent faces already exists in Keesa. Your
          answers hide the ones that don’t apply to you, so what’s left is
          genuinely yours.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-4">
        {rooms.map((room) => (
          <div
            key={room.title}
            className="bg-surface shadow-rest hover:shadow-lift flex flex-col gap-[15px] rounded-[24px] p-[22px] transition-shadow"
          >
            <span
              className="flex h-[38px] w-[38px] items-center justify-center rounded-[13px] text-[15px]"
              style={{ background: room.tile, color: room.ink }}
            >
              {room.glyph}
            </span>
            <div>
              <h3 className="font-display mb-[5px] text-[19px] font-bold tracking-[-0.025em]">
                {room.title}
              </h3>
              <p className="text-body m-0 text-[14px] leading-[1.6] text-pretty">
                {room.body}
              </p>
            </div>
            <span className="text-soft mt-auto text-[12.5px]">{room.meta}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
