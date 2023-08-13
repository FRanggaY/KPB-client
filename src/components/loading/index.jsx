import React from 'react';

export function MiniLoading() {
  return (
      <div className="block">
          <div class="flex items-center justify-center gap-5 ">
              <div>Data sedang diproses </div>
              <div class="w-16 h-16 border-l-2 border-gray-900 rounded-full animate-spin"></div>
          </div>
      </div>
  )
}
