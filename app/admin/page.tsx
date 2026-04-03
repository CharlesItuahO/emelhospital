'use client';

import { useState, useEffect } from 'react';
import { getAppointments, getMessages, updateAppointmentStatus, markMessageRead, checkDbStatus, Appointment, Message } from '@/lib/actions';
import { Calendar, MessageSquare, Check, X, LogOut } from 'lucide-react';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [dbError, setDbError] = useState('');
  
  const [activeTab, setActiveTab] = useState<'appointments' | 'messages'>('appointments');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async () => {
    setIsLoading(true);
    setDbError('');
    try {
      const isConfigured = await checkDbStatus();
      if (!isConfigured) {
        setDbError('Database is not configured. Please set POSTGRES_URL in your environment variables.');
        setIsLoading(false);
        return;
      }
      
      const apps = await getAppointments();
      const msgs = await getMessages();
      setAppointments(apps);
      setMessages(msgs);
    } catch (err) {
      console.error(err);
      setDbError('Failed to load data from database.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Check session storage for auth state
    if (sessionStorage.getItem('emel_admin_auth') === 'true') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple hardcoded login for demonstration
    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
      sessionStorage.setItem('emel_admin_auth', 'true');
      loadData();
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('emel_admin_auth');
  };

  const handleUpdateAppointmentStatus = async (id: string, status: string) => {
    await updateAppointmentStatus(id, status);
    await loadData();
  };

  const handleMarkMessageRead = async (id: string) => {
    await markMessageRead(id);
    await loadData();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-serif font-bold text-3xl mx-auto mb-4">E</div>
            <h1 className="font-serif text-2xl font-bold text-slate-900">Admin Login</h1>
            <p className="text-slate-500 text-sm mt-2">Use admin / password to login</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center">{error}</div>}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Username</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors">
              Login to Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
          <div>
            <h1 className="font-serif text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-slate-400">Manage appointments and patient inquiries</p>
          </div>
          <button onClick={handleLogout} className="flex items-center text-slate-300 hover:text-white transition-colors bg-slate-800 px-4 py-2 rounded-lg">
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 mt-8">
        {dbError && (
          <div className="mb-8 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 flex justify-between items-center">
            <span>{dbError}</span>
            <button onClick={loadData} className="px-4 py-2 bg-red-100 hover:bg-red-200 rounded-lg text-sm font-medium transition-colors">
              Retry
            </button>
          </div>
        )}

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button 
            onClick={() => setActiveTab('appointments')}
            className={`flex items-center px-6 py-3 rounded-xl font-medium transition-colors ${activeTab === 'appointments' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
          >
            <Calendar className="w-5 h-5 mr-2" /> Appointments
            {appointments.filter(a => a.status === 'pending').length > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {appointments.filter(a => a.status === 'pending').length}
              </span>
            )}
          </button>
          <button 
            onClick={() => setActiveTab('messages')}
            className={`flex items-center px-6 py-3 rounded-xl font-medium transition-colors ${activeTab === 'messages' ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
          >
            <MessageSquare className="w-5 h-5 mr-2" /> Messages
            {messages.filter(m => !m.read).length > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {messages.filter(m => !m.read).length}
              </span>
            )}
          </button>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          {isLoading ? (
            <div className="p-12 text-center text-slate-500">Loading data...</div>
          ) : activeTab === 'appointments' ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-slate-600 text-sm">
                    <th className="p-4 font-medium">Patient Details</th>
                    <th className="p-4 font-medium">Service</th>
                    <th className="p-4 font-medium">Date & Time</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.length === 0 ? (
                    <tr><td colSpan={5} className="p-8 text-center text-slate-500">No appointments found.</td></tr>
                  ) : appointments.map(app => (
                    <tr key={app.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                      <td className="p-4">
                        <div className="font-medium text-slate-900">{app.name}</div>
                        <div className="text-sm text-slate-500">{app.phone}</div>
                      </td>
                      <td className="p-4 text-slate-700">{app.service}</td>
                      <td className="p-4">
                        <div className="text-slate-900">{app.date}</div>
                        <div className="text-sm text-slate-500">{app.time}</div>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          app.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          app.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        {app.status === 'pending' && (
                          <div className="flex justify-end space-x-2">
                            <button onClick={() => handleUpdateAppointmentStatus(app.id, 'confirmed')} className="p-2 bg-green-50 text-green-600 hover:bg-green-100 rounded-lg transition-colors" title="Confirm">
                              <Check className="w-4 h-4" />
                            </button>
                            <button onClick={() => handleUpdateAppointmentStatus(app.id, 'cancelled')} className="p-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors" title="Cancel">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {messages.length === 0 ? (
                <div className="p-8 text-center text-slate-500">No messages found.</div>
              ) : messages.map(msg => (
                <div key={msg.id} className={`p-6 flex flex-col md:flex-row gap-6 transition-colors ${!msg.read ? 'bg-blue-50/30' : ''}`}>
                  <div className="md:w-1/4 shrink-0">
                    <div className="font-medium text-slate-900 flex items-center">
                      {!msg.read && <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>}
                      {msg.name}
                    </div>
                    <div className="text-sm text-slate-500 mt-1">{msg.phone}</div>
                    <div className="text-xs text-slate-400 mt-2">{new Date(msg.created_at).toLocaleString()}</div>
                  </div>
                  <div className="md:w-2/4">
                    <p className="text-slate-700 whitespace-pre-wrap">{msg.message}</p>
                  </div>
                  <div className="md:w-1/4 flex justify-end items-start">
                    {!msg.read && (
                      <button 
                        onClick={() => handleMarkMessageRead(msg.id)}
                        className="text-sm bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 px-4 py-2 rounded-lg transition-colors"
                      >
                        Mark as Read
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
