import { ReactNode } from 'react';

interface WhatsAppButtonProps {
  onClick?: () => void;
  text?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  id?: string;
  children?: ReactNode;
}

export function WhatsAppButton({
  onClick,
  text = 'Falar no WhatsApp',
  className = '',
  size = 'md',
  fullWidth = false,
  id,
  children,
}: WhatsAppButtonProps) {
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-2',
    md: 'px-6 py-3 text-sm gap-2.5',
    lg: 'px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base gap-3',
  };

  return (
    <button
      id={id}
      type="button"
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center font-medium rounded-full text-white shadow-md shadow-[#25D366]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#25D366]/35 hover:scale-[1.02] active:scale-[0.98] ${
        sizeStyles[size]
      } ${fullWidth ? 'w-full' : 'w-auto'} ${className}`}
      style={{
        backgroundColor: '#25D366',
      }}
    >
      <div className="w-5 h-5 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          className="transition-transform duration-300 group-hover:rotate-6"
        >
          <path d="M12.031 2C6.516 2 2.031 6.485 2.031 12c0 1.954.563 3.784 1.543 5.334L2 22l4.832-1.53c1.472.88 3.197 1.396 5.199 1.396 5.515 0 10-4.485 10-10s-4.485-10-10-10zm0 18.25c-1.748 0-3.376-.525-4.733-1.429l-.339-.224-2.868.908.924-2.793-.243-.367A8.196 8.196 0 0 1 3.781 12c0-4.551 3.7-8.25 8.25-8.25 4.549 0 8.25 3.699 8.25 8.25s-3.701 8.25-8.25 8.25zm4.516-6.175c-.247-.124-1.464-.723-1.691-.806-.228-.082-.394-.124-.56.124-.167.248-.642.806-.788.971-.145.166-.29.186-.538.062-.247-.124-1.045-.385-1.99-1.229-.737-.657-1.234-1.47-1.379-1.718-.145-.248-.016-.382.108-.505.112-.111.248-.29.373-.435.124-.145.166-.248.249-.414.082-.166.041-.311-.021-.435-.062-.124-.56-1.348-.767-1.847-.202-.486-.407-.42-.56-.428-.145-.008-.311-.008-.477-.008-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.074 0 1.224.892 2.407 1.016 2.573.124.166 1.753 2.678 4.248 3.755.594.257 1.058.41 1.42.525.597.189 1.141.163 1.57.099.479-.072 1.464-.599 1.671-1.178.207-.579.207-1.076.145-1.178-.062-.104-.228-.166-.476-.29z" />
        </svg>
      </div>
      <span className="tracking-wide">{children || text}</span>
    </button>
  );
}
