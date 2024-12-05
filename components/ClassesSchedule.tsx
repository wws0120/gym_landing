'use client';
import React, { useState, useEffect } from 'react';

type ClassInfo = {
  time: string;
  monday: { name: string; instructor: string } | null;
  tuesday: { name: string; instructor: string } | null;
  wednesday: { name: string; instructor: string } | null;
  thursday: { name: string; instructor: string } | null;
  friday: { name: string; instructor: string } | null;
  saturday: { name: string; instructor: string } | null;
  sunday: { name: string; instructor: string } | null;
};
const ClassSchedule = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [currentDays, setCurrentDays] = useState(['Monday']);
  const [screenWidth, setScreenWidth] = useState(0);

  const dayGroups = {
    mobile: [
      ['Monday'],
      ['Tuesday'],
      ['Wednesday'],
      ['Thursday'],
      ['Friday'],
      ['Saturday'],
      ['Sunday'],
    ],
    tablet: [
      ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      ['Friday', 'Saturday', 'Sunday'],
    ],
  };

  const classes: ClassInfo[] = [
    {
      time: '17.00 - 18.00',
      monday: null,
      tuesday: null,
      wednesday: { name: 'Cardio', instructor: 'Robert Clark' },
      thursday: null,
      friday: null,
      saturday: null,
      sunday: { name: 'MMA', instructor: 'Mike Thompson' },
    },
    {
      time: '18.00 - 19.00',
      monday: null,
      tuesday: { name: 'GRAPPLING', instructor: 'Mike Thompson' },
      wednesday: { name: 'LADIES BOXING', instructor: 'Ms. Garcia' },
      thursday: { name: 'CARDIO', instructor: 'Robert Clark' },
      friday: { name: 'BOXING', instructor: 'John Johnson' },
      saturday: { name: 'MMA', instructor: 'Mike Thompson' },
      sunday: { name: 'LADIES BOXING', instructor: 'Ms. Garcia' },
    },
    {
      time: '19.00 - 20.00',
      monday: { name: 'BOXING', instructor: 'John Johnson' },
      tuesday: { name: 'Muay Thai', instructor: 'Alexis Lee' },
      wednesday: { name: 'BOXING', instructor: 'John Johnson' },
      thursday: { name: 'LADIES BOXING', instructor: 'Ms. Garcia' },
      friday: { name: 'GRAPPLING', instructor: 'Mike Thompson' },
      saturday: { name: 'CARDIO', instructor: 'Robert Clark' },
      sunday: { name: 'HIIT', instructor: 'Robert Clark' },
    },
    {
      time: '20.00 - 21.00',
      monday: { name: 'FITNESS', instructor: 'Robert Clark' },
      tuesday: { name: 'BOXING', instructor: 'John Johnson' },
      wednesday: { name: 'MMA', instructor: 'Mike Thompson' },
      thursday: { name: 'MMA', instructor: 'Mike Thompson' },
      friday: { name: 'Muay Thai', instructor: 'Alexis Lee' },
      saturday: { name: 'BOXING', instructor: 'John Johnson' },
      sunday: { name: 'BOXING', instructor: 'John Johnson' },
    },
    {
      time: '21.00 - 22 .00',
      monday: { name: 'Muay Thai', instructor: 'Alexis Lee' },
      tuesday: null,
      wednesday: { name: 'Muay Thai', instructor: 'Alexis Lee' },
      thursday: { name: 'BOXING', instructor: 'John Johnson' },
      friday: null,
      saturday: { name: 'Muay Thai', instructor: 'Alexis Lee' },
      sunday: null,
    },
  ];

  useEffect(() => {
    // Set initial screen width
    setScreenWidth(window.innerWidth);

    // Update days based on screen width
    function updateDays() {
      if (window.innerWidth >= 1280) {
        setCurrentDays([
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ]);
      } else if (window.innerWidth >= 768) {
        setCurrentDays(dayGroups.tablet[currentGroup]);
      } else {
        setCurrentDays(dayGroups.mobile[currentGroup]);
      }
      setScreenWidth(window.innerWidth);
    }

    // Initial update
    updateDays();

    // Add resize listener
    window.addEventListener('resize', updateDays);

    // Cleanup
    return () => window.removeEventListener('resize', updateDays);
  }, [currentGroup, screenWidth]);

  const navigate = (direction: 'next' | 'prev') => {
    if (window.innerWidth < 768) {
      // mobile
      const maxGroups = dayGroups.mobile.length;
      setCurrentGroup((prev) =>
        direction === 'next'
          ? (prev + 1) % maxGroups
          : (prev - 1 + maxGroups) % maxGroups
      );
    } else if (window.innerWidth < 1280) {
      // tablet
      const maxGroups = dayGroups.tablet.length;
      setCurrentGroup((prev) =>
        direction === 'next'
          ? (prev + 1) % maxGroups
          : (prev - 1 + maxGroups) % maxGroups
      );
    }
  };

  return (
    <section id="schedule" className="max-w-[1320px] mx-auto px-[15px] py-20">
      <h2 className="text-4xl font-bold mb-12 text-center gsap-section-title">
        Class Schedule
      </h2>
      <div className="gsap-schedule-table">
        <div className="xl:hidden flex justify-between mb-4">
          <button
            onClick={() => navigate('prev')}
            className="px-4 py-2 bg-red-600 text-slate-100 text-2xl rounded-md"
          >
            &lt;
          </button>
          <button
            onClick={() => navigate('next')}
            className="px-4 py-2 bg-red-600 text-slate-100 text-2xl rounded-md"
          >
            &gt;
          </button>
        </div>

        <div className="relative">
          <div
            className="grid"
            style={{
              gridTemplateColumns: `auto repeat(${currentDays.length}, 1fr)`,
            }}
          >
            <div className=""></div>
            {currentDays.map((day) => (
              <div
                key={day}
                className="font-[Teko] font-medium text-[20px] text-center mb-2"
              >
                {day}
              </div>
            ))}

            {classes.map((classInfo, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center">
                  <div className="font-[Teko] font-medium text-[20px]">
                    {classInfo.time}
                  </div>
                </div>
                {currentDays.map((day) => {
                  const classDetail =
                    classInfo[day.toLowerCase() as keyof ClassInfo];
                  return (
                    <div key={day} className="h-[100px]">
                      {classDetail &&
                      typeof classDetail === 'object' &&
                      classDetail !== null ? (
                        <div className="p-[10px]">
                          <div className="bg-amber-100 text-[#01010F] p-[10px]">
                            <div className="font-[Teko] font-semibold text-[15px]">
                              {classDetail.name}
                            </div>
                            <div className="text-lg">
                              {classDetail.instructor}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <span className="text-gray-500">No Class</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassSchedule;
