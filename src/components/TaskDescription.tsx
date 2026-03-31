export default function TaskDescription({ text }: any) {
  if (!text) return null;

  return <p className="text-sm text-gray-600 mt-1 line-clamp-2">{text}</p>;
}
