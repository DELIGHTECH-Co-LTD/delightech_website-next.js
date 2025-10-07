import React from 'react'

const people = [
  {name: 'Alyssa', role: 'Lead Designer'},
  {name: 'Jon', role: 'Product Strategist'},
  {name: 'Maya', role: 'Frontend Engineer'},
]

export default function Team(){
  return (
    <section id="team" className="py-20">
      <h3 className="text-xl text-gray-300 mb-6">Team</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {people.map(p=>(
          <div key={p.name} className="p-6 glass text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2b2b2b] to-[#111] mx-auto mb-4 flex items-center justify-center">
              <span className="text-lg">{p.name[0]}</span>
            </div>
            <h4 className="font-semibold">{p.name}</h4>
            <p className="text-sm text-gray-400">{p.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
